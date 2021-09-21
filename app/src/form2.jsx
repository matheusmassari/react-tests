import './form2.css'

function FormularioUsuario() {
  function handleSubmit(event) {
    event.preventDefault();
    const usuario = event.target.elements.usuario.value;
    alert(`Voce digitou: ${usuario}`);
  }

  return (
    <div className="form-box">
      
      <form onSubmit={handleSubmit} action="">
        <div className="field1">
          <label htmlFor="usuario">Customer info:</label>
          <input type="text" placeholder="Name" />
          <input placeholder="Phone 000-000-0000" />
          <input placeholder="E-mail" />
          <textarea placeholder="Shipping Address" />
          <textarea placeholder="Physical location of the project" />
        </div>

        <div class="buttonHolder">
            <button type="submit" id="submitBtn" className="submitBtn">
              Submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioUsuario;
