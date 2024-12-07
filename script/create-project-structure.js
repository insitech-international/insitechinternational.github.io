const fs = require('fs');
const path = require('path');

const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const createFile = (filePath, content = '') => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
};

const createProjectStructure = () => {
  const srcPath = path.join(__dirname, 'src');
  createDirectory(srcPath);

  const features = [
    'about', 'blog', 'brand', 'careers', 'chatbot', 'common', 'contact',
    'faq', 'footer', 'header', 'hero', 'home', 'portfolio', 'pricing',
    'recommendations', 'resources', 'services', 'store', 'styles',
    'testimonials', 'utils'
  ];

  features.forEach(feature => {
    const featurePath = path.join(srcPath, feature);
    createDirectory(featurePath);

    if (feature === 'common') {
      createDirectory(path.join(featurePath, 'components'));
      createDirectory(path.join(featurePath, 'hooks'));
      createDirectory(path.join(featurePath, 'modals'));
      createFile(path.join(featurePath, 'index.js'));
    } else if (feature === 'styles') {
      createDirectory(path.join(featurePath, 'base'));
      createDirectory(path.join(featurePath, 'modules'));
      createFile(path.join(featurePath, 'global.css'));
      createFile(path.join(featurePath, 'main.css'));
      createFile(path.join(featurePath, 'mixins.css'));
      createFile(path.join(featurePath, 'variables.css'));
    } else if (feature === 'store') {
      createFile(path.join(featurePath, 'index.js'));
      createFile(path.join(featurePath, 'rootReducer.js'));
      createFile(path.join(featurePath, 'store.js'));
    } else if (feature === 'utils') {
      createFile(path.join(featurePath, 'api.js'));
      createFile(path.join(featurePath, 'computer-vision.js'));
      createFile(path.join(featurePath, 'helpers.js'));
      createFile(path.join(featurePath, 'index.js'));
      createFile(path.join(featurePath, 'nlp.js'));
    } else {
      createDirectory(path.join(featurePath, 'api'));
      createDirectory(path.join(featurePath, 'components'));
      createDirectory(path.join(featurePath, 'hooks'));
      createDirectory(path.join(featurePath, 'pages'));
      createDirectory(path.join(featurePath, 'routes'));
      createDirectory(path.join(featurePath, 'services'));
      createFile(path.join(featurePath, 'constants.js'));
      createFile(path.join(featurePath, 'index.js'));
    }
  });

  createFile(path.join(srcPath, 'App.js'));
  createFile(path.join(srcPath, 'index.js'));

  const publicPath = path.join(__dirname, 'public');
  createDirectory(publicPath);
  createFile(path.join(publicPath, 'index.html'));
  createFile(path.join(publicPath, 'manifest.json'));
  createFile(path.join(publicPath, 'robots.txt'));

  console.log('Project structure created successfully!');
};

createProjectStructure();