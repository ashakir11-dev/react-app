interface AlertProps {
  text: String;
  onClose: () => void;
}
const Alert = ({ text, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
