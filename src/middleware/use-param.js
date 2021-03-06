import _ from 'lodash';
import Errors from 'utils/errors';

export default (paramName, fieldName, parser = _.identity) => (
  req,
  res,
  next
) => {
  try {
    const value = parser(_.get(req.params, paramName));
    if (_.isNull(value) || _.isNaN(value)) {
      throw new Errors.BadRequest();
    }
    req[fieldName] = value;
    next();
  } catch (err) {
    next(new Errors.BadRequest('Invalid param'));
  }
};
