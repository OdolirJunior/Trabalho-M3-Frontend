import React from "react";
import Modal from "react-modal";
import "./ModalTodo.css";

class ModalTodo extends React.Component {
  render() {
    const { todo, submit, onChangeModal, handleOpenModal, handleCloseModal, open, groups } = this.props;

    return (
      <div>
        <button color="success" size="lg" onClick={handleOpenModal}>
          + ADICIONAR
        </button>
        <Modal isOpen={open}>
          <h4>Adicionar To Do</h4>
          <div>
            <span className={!todo.status ? "tag-status-todo-pendent" : "tag-status-todo-conc"}>{!todo.status ? "Pendente" : "Concluido"}</span>

            <div className="form-group">
              <input
                placeholder="Titulo"
                className="form-control"
                type="text"
                maxLength="45"
                required
                name="title"
                value={todo.title}
                onChange={event => onChangeModal(event)}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Descrição"
                className="form-control"
                type="text-area"
                required
                maxLength="45"
                name="content"
                value={todo.content}
                onChange={event => onChangeModal(event)}
              />
            </div>
            <div>
              <select name="groupId" value={todo.group} required className="form-control" onChange={event => onChangeModal(event)}>
                {groups &&
                  groups.length > 0 &&
                  groups.map(group => (
                    <option className="form-control" value={group.id}>
                      {group.title}
                    </option>
                  ))}
                <option className="form-control" value={null} selected="selected">
                  {""}
                </option>
              </select>
            </div>
          </div>
          <div>
            <button color="secondary" onClick={handleCloseModal}>
              CANCELAR
            </button>
            <button color="primary" onClick={submit} disabled={!todo.title || todo.group === null}>
              SALVAR
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalTodo;
