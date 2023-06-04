/**
 *    Alert-Function.
 *    ===============
 */
const setAlert = (messege, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${messege} <button class="btn btn-close" data-bs-dismiss="alert"></button> </p>`;
};

// Export.
export default setAlert;
