#!/usr/bin/env python3
"""Verify local links and static assets in the GitHub Pages website.

Runs with Python's standard library (no third-party packages required).
All links beginning with http(s), mailto, tel, data or # are intentionally
skipped; this only verifies files that belong to this repository.
"""
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

SITE = (Path(__file__).resolve().parents[1] / "docs").resolve()
LINK_ATTRIBUTES = {
    "a": ("href",),
    "link": ("href",),
    "script": ("src",),
    "img": ("src",),
    "source": ("src",),
}


class SiteLinkChecker(HTMLParser):
    def __init__(self, page: Path) -> None:
        super().__init__(convert_charrefs=True)
        self.page = page
        self.count = 0
        self.errors: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        for attribute in LINK_ATTRIBUTES.get(tag, ()):
            url = attributes.get(attribute)
            if not url:
                continue
            parsed = urlsplit(url)
            if parsed.scheme or parsed.netloc or url.startswith(("#", "//")):
                continue

            raw_path = unquote(parsed.path)
            if not raw_path:
                continue
            # Project GitHub Pages may use an absolute URL rooted at the repo.
            if raw_path.startswith("/aru-cjlu-ai-2026/"):
                destination = SITE / raw_path.removeprefix("/aru-cjlu-ai-2026/")
            elif raw_path.startswith("/"):
                destination = SITE / raw_path.lstrip("/")
            else:
                destination = self.page.parent / raw_path

            destination = destination.resolve()
            if destination.is_dir():
                destination /= "index.html"
            self.count += 1
            if not destination.is_relative_to(SITE):
                self.errors.append(f"{self.page.relative_to(SITE)}: link escapes docs/: {url}")
            elif not destination.is_file():
                self.errors.append(f"{self.page.relative_to(SITE)}: missing file for {attribute}={url!r}")


def main() -> int:
    pages = sorted(SITE.rglob("*.html"))
    if not pages:
        print("ERROR: no HTML pages found under docs/")
        return 1
    checked = 0
    errors: list[str] = []
    for page in pages:
        parser = SiteLinkChecker(page)
        parser.feed(page.read_text(encoding="utf-8"))
        parser.close()
        checked += parser.count
        errors.extend(parser.errors)
    for error in errors:
        print(f"ERROR: {error}")
    print(f"Checked {len(pages)} HTML pages and {checked} local references.")
    if errors:
        print(f"Failed: {len(errors)} broken local reference(s).")
        return 1
    print("All local HTML references resolve to files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
