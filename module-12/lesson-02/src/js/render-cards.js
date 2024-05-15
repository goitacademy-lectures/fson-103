export const renderCardsMarkup = articles => {
  return articles.reduce((markup, article) => {
    return (markup += `
      <div class="card g-col-4">
        <img
          class="card-img-top"
          src=${article.urlToImage || './public/placeholder.png'}
          alt="${article.title}"
          height="146"
        />
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.description}</p>
          <p class="card-text">
            <small class="text-body-secondary">${article.publishedAt}</small>
          </p>
          <a href="#" class="btn btn-primary">
            <span class="text-white">Read more</span>
          </a>
        </div>
      </div>`);
  }, '');
};
