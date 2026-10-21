window.MODULES = {
  sdt: {
    title: "Semantic Data Technologies",
    code: "SDT",
    strapline: "Make data meaningful, connected and machine-understandable.",
    summary: "A twelve-day course on semantic data, ontologies, RDF, Protégé, a movie dataset, NLP, SPARQL queries, importing data and deploying a Fuseki endpoint. The course concludes with student presentations.",
    tools: "Protégé, RDF, the movie dataset, SPARQL and Apache Jena Fuseki",
    outcomes: ["Explain semantic data, RDF and ontology fundamentals", "Explore and model a movie dataset using Protégé", "Import ontologies and individual data", "Write SPARQL queries and work with a Fuseki endpoint", "Communicate results in a final presentation"],
    days: [
      [1, "Semantic Data"],
      [2, "Ontologies"],
      [3, "Protégé Demos"],
      [4, "RDF"],
      [5, "Movie Dataset"],
      [6, "NLP"],
      [7, "SPARQL Part I"],
      [8, "SPARQL Part II"],
      [9, "SPARQL III"],
      [10, "Importing Data (ontologies and individuals)"],
      [11, "Fuseki / SPARQL endpoint"],
      [12, "Presentations Schedule"]
    ]
  },
  aml: {
    title: "Advanced Machine Learning",
    code: "AML",
    strapline: "Move from fitting models to designing reliable learning systems.",
    summary: "This module develops advanced modelling, experimental and interpretive skills, with emphasis on selecting methods for the problem rather than applying algorithms mechanically.",
    tools: "Python, NumPy, pandas, scikit-learn, XGBoost, SHAP and Jupyter/Colab",
    outcomes: ["Design robust machine-learning experiments", "Compare linear, kernel, ensemble and probabilistic methods", "Handle dimensionality and unstructured relationships", "Interpret uncertainty and model behaviour", "Communicate limitations and deployment risks"],
    weeks: [
      ["1", "Learning Problems and Experimental Design", "Tasks, variables, baselines, leakage and reproducible workflows", "Baseline notebook"],
      ["2", "Representation and Data Preparation", "Missingness, encoding, scaling, imbalance and feature construction", "Pipeline lab"],
      ["3", "Regularised Linear Models", "Bias–variance trade-off, L1/L2 penalties and model selection", "Derivation + code"],
      ["4", "Kernel Methods and Support Vector Machines", "Margins, kernels, dual intuition and hyperparameter search", "SVM lab"],
      ["5", "Tree Ensembles and Boosting", "Random forests, gradient boosting, XGBoost and feature importance", "Benchmark study"],
      ["6", "Unsupervised Learning", "Clustering, mixture models, validation and interpreting latent groups", "Clustering challenge"],
      ["7", "Dimensionality Reduction", "PCA, manifold learning and visualisation without overclaiming", "Embedding lab"],
      ["8", "Probabilistic Machine Learning", "Likelihood, Bayesian reasoning, calibration and uncertainty", "Calibration lab"],
      ["9", "Graph-Based Machine Learning", "Graph representations, node features, link prediction and message passing", "Graph notebook"],
      ["10", "Explainability and Responsible ML", "Global/local explanations, fairness, robustness and documentation", "Model audit"],
      ["11", "Deployment and Monitoring", "Distribution shift, drift, reproducibility and human oversight", "Deployment plan"],
      ["12", "Research-Style Evaluation", "Ablation, statistical comparison, reporting and project synthesis", "Project showcase"]
    ]
  },
  dl: {
    title: "Neural Networks and Deep Learning",
    code: "DL",
    strapline: "Understand what deep networks learn, how they learn and when to trust them.",
    summary: "This module builds neural networks from their mathematical foundations and progresses to contemporary architectures for images, sequences, graphs and generative modelling.",
    tools: "Python, PyTorch, torchvision, Hugging Face and Google Colab",
    outcomes: ["Derive and implement forward and backward propagation", "Train stable neural networks using modern optimisation", "Select architectures for images, sequences and graphs", "Use transfer learning and generative methods", "Evaluate robustness, explainability and computational cost"],
    weeks: [
      ["1", "From Perceptrons to Neural Networks", "Linear units, activations, multilayer networks and representation learning", "Build a neuron"],
      ["2", "Forward Propagation and Loss Functions", "Tensor shapes, logits, regression/classification losses and computation graphs", "PyTorch basics"],
      ["3", "Backpropagation Step by Step", "Chain rule, gradients, automatic differentiation and gradient checking", "Manual derivation"],
      ["4", "Optimisation and Regularisation", "SGD, momentum, Adam, schedules, weight decay, dropout and normalisation", "Training clinic"],
      ["5", "Convolutional Neural Networks", "Convolution, receptive fields, pooling and image-classification design", "CNN lab"],
      ["6", "Transfer Learning", "Pretraining, frozen features, fine-tuning and domain shift", "Image project"],
      ["7", "Sequence Models", "RNNs, LSTMs, gated memory and sequence learning", "Sequence lab"],
      ["8", "Attention and Transformers", "Queries, keys, values, self-attention, position and encoder/decoder design", "Attention notebook"],
      ["9", "Autoencoders and Generative Models", "Latent spaces, VAEs, GANs and diffusion-model intuition", "Generation lab"],
      ["10", "Graph Neural Networks", "Message passing, aggregation, node classification and graph-level tasks", "GNN lab"],
      ["11", "Interpretable and Robust Deep Learning", "Saliency, adversarial failure, uncertainty and responsible evaluation", "Network audit"],
      ["12", "Efficient Deployment and Synthesis", "Compression, inference, monitoring and communicating experimental evidence", "Project showcase"]
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-module]');
  if (!root) return;
  const module = window.MODULES[root.dataset.module];
  if (!module) return;
  document.title = `${module.title} | ARU × CJLU`;
  document.querySelector('[data-module-code]').textContent = module.code;
  document.querySelector('[data-module-title]').textContent = module.title;
  document.querySelector('[data-module-strapline]').textContent = module.strapline;
  document.querySelector('[data-module-summary]').textContent = module.summary;
  document.querySelector('[data-module-tools]').textContent = module.tools;
  document.querySelector('[data-module-outcomes]').innerHTML = module.outcomes.map(item => `<li>${item}</li>`).join('');
  // The SDT module has a 12-day programme; AML and DL retain their weekly outlines.
  if (Array.isArray(module.days)) {
    const topicIndex = document.querySelector('[data-module-topics]');
    const dayList = document.querySelector('[data-module-days]');
    if (topicIndex) {
      topicIndex.innerHTML = module.days.map(([day, topic]) => `
        <a class="sdt-topic-link" href="#day-${day}">
          <span class="sdt-topic-day">Day ${String(day).padStart(2, '0')}</span>
          <span class="sdt-topic-name">${topic}</span>
          <span class="sdt-topic-arrow" aria-hidden="true">↗</span>
        </a>`).join('');
    }
    if (dayList) {
      dayList.innerHTML = module.days.map(([day, topic]) => `
        <li class="sdt-day-item" id="day-${day}">
          <span class="sdt-day-number">${String(day).padStart(2, '0')}</span>
          <div><span class="sdt-day-label">Day ${day}</span><h3>${topic}</h3></div>
        </li>`).join('');
    }
  } else {
    const weeklyTable = document.querySelector('[data-module-weeks]');
    if (weeklyTable) {
      weeklyTable.innerHTML = module.weeks.map(week => `
        <tr><td>${week[0]}</td><td><strong>${week[1]}</strong><br>${week[2]}</td><td><span class="tag">${week[3]}</span></td></tr>`).join('');
    }
  }
});
