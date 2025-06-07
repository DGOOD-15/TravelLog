import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useModalClose from "../../hooks/useModalClose";

function EditProfileModal({
    isOpen, onClose
}) {

    return (
        <ModalWithForm
            title="Edit profile"
            buttonText="Update profile"
            loginText="Reset"
            isOpen={isOpen}
            onClose={onClose}
        />
    );
}

export default EditProfileModal;