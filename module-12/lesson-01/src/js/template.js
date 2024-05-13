export const createGalleryItemMarkup = images => {
  return images
    .map(
      ({ urls, alt_description, likes }) => `
      <div class="col">
        <div class="card shadow-sm">
          <img src="${urls.regular}" alt="${alt_description}" class="gallery-img img-fluid" width="220" height="220" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-body-secondary">Likes: ${likes}</small>
            </div>
          </div>
        </div>
      </div>`
    )
    .join('');
};
