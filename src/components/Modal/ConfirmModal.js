import React from 'react';
import Button from '../Button/Button';
import './Modal.css';

const ConfirmModal = ({ 
  title, 
  message, 
  onConfirm, 
  onClose, 
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  warningPoints = [] 
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <p className="confirm-message">{message}</p>
          {warningPoints.length > 0 && (
            <div className="confirm-warning">
              <p>Please note:</p>
              <ul>
                {warningPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="modal-buttons">
          <Button 
            variant="secondary" 
            className="confirm-button"
            onClick={onConfirm}
          >
            {confirmButtonText}
          </Button>
          <Button 
            variant="secondary" 
            onClick={onClose}
          >
            {cancelButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal; 