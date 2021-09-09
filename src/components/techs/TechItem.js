import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: `${tech.firstName} ${tech.lastName} is removed from the technician list`,
    });
  };
  return (
    <div>
      <li className='collection-item'>
        <div>
          {tech.firstName} {tech.lastName}
          <a href='#!' onClick={onDelete} className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
