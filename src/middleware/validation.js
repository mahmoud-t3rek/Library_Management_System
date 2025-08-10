const validation = (schema) => {
  return (req, res, next) => {
    let validationErrors = [];
    for (const key of Object.keys(schema)) {
      const { error } = schema[key].validate(req[key], { abortEarly: false,  convert: true });
      if (error) {
        validationErrors.push(...error.details.map((e) => e.message));
      } 
    }
    if (validationErrors.length > 0) {
      throw new Error(validationErrors,404)
    }
  return next();
  };
};

export default validation;
