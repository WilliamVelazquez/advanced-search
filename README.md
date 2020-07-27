# Advanced Search

Search box to filter multiple data sets by type and content, developed with ReactJs and Elastic Search.

![Simetrik](./src/assets/images/logo.svg)


### 🚀 Links

 * **Website:** https://williamvelazquez.github.io/advanced-search/


### 🔧 Installation

Require Node.JS
```
npm install
```

Create a **.env** file at root level following the example file (.env-example).
```
PORT=3001
NODE_ENV=development
CLUSTER_URL='https://...'
CREDENTIALS='XxXxXxX:XxXxXxXXxXxXxX'
APPS=users,sources,boards,reconciliations
```
>This project needs credentials for a **appbase.io** cluster for the Elastic Search Queries, feel free to can contact me to get them.


### 🛠️ Execution

📌 **Development Environment**
```
npm run dev
```

>This project runs on **http://localhost:3001** or the specified **PORT** on the .env file.


📌 **Production Environment**

Run the following command to create the production build over the **dist** folder:
```
npm run prod
```

>After creating the production build you can open the **index.html** on your browser.

📌**Deployment on GitHub Pages**

Run the following command to create the production build and deploy on gh-pages branch for the first time:
```
npm run deploy:new
```

Run the following command to create the production build and deploy if you already have the gh-pages branch:
```
npm run deploy
```


### 💻 Technologies

  * React
  * ESLint
  * Webpack
  * Elastic Search
  * Styled Components

### ✒️ Author

* **William Velazquez** - [Website](https://williamvelazquez.com/)

If you want to know about the insights [click here!](https://github.com/WilliamVelazquez/advanced-search/pulse/monthly)


### 📷 Screenshots

![App](./.readme-static/app.png)
![TextFilter](./.readme-static/text-filter.png)
![Suggestions](./.readme-static/suggestions.png)
![TagHighlight](./.readme-static/tag-highlight.png)


## 📄License

This project is licensed under the terms of the **MIT license**.


### 🎁 Contribute

Feel free to contribute to the project!
