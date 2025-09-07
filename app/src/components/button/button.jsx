import './button.css';

function Button({ 
  text
}) {
  return (
    <button class="custom-btn btn">{text}</button>
  );
}

export default Button;