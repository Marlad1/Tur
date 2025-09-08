import './button.css';

function Button({ 
  text,
  onClick
}) {
  return (
    <button class="custom-btn btn" onClick={onClick}>{text}</button>
  );
}

export default Button;