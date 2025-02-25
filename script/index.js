//Elementos 
const buttonSkillsPrograming = document.getElementById('btn_programming_skills');
const buttonSkillsMechatronic = document.getElementById('btn_mechatronic_skills');
const divSkillsPrograming = document.querySelector('.programming_skills');
const divSkillsMechatronic = document.querySelector('.mechatronic_skills');

const buttonWebDevelopment = document.getElementById('btn_web_development_projects');
const buttonMicrocontrollers = document.getElementById('btn_microcontrollers_projects');
const buttonPython = document.getElementById('btn_python_projects');
const buttonMechatronic = document.getElementById('btn_mechatronic_projects');
const divWebDevelopment = document.querySelector('.web_development_projects');
const divMicrocontrollers = document.querySelector('.microcontrollers_projects');
const divPython = document.querySelector('.python_projects');
const divMechatronic = document.querySelector('.mechatronic_projects');

const imageModal = document.getElementById('modalImage');
const modal = document.getElementById('modal');


// Cuando se presiona el boton de programacion se muestra el div de programacion y se oculta el de mecatronica
buttonSkillsPrograming.addEventListener('click', function () {
    
    divSkillsPrograming.style.display = 'flex';
    divSkillsMechatronic.style.display = 'none';
    this.classList.add('active');
    buttonSkillsMechatronic.classList.remove('active');
});

// Cuando se presiona el boton de mecatronica se muestra el div de mecatronica y se oculta el de programacion
buttonSkillsMechatronic.addEventListener('click', function () {

    divSkillsPrograming.style.display = 'none';
    divSkillsMechatronic.style.display = 'flex';
    this.classList.add('active');
    buttonSkillsPrograming.classList.remove('active');
});

// Cuando se presiona el boton de web development se muestra el div de web development y se oculta el de microcontrollers, python y mecatronica
buttonWebDevelopment.addEventListener('click', function () {
    
    divWebDevelopment.style.display = 'flex';
    divMicrocontrollers.style.display = 'none';
    divPython.style.display = 'none';
    divMechatronic.style.display = 'none';
    this.classList.add('active');
    buttonMicrocontrollers.classList.remove('active');
    buttonPython.classList.remove('active');
    buttonMechatronic.classList.remove('active');
});

// Cuando se presiona el boton de microcontrollers se muestra el div de microcontrollers y se oculta el de web development, python y mecatronica
buttonMicrocontrollers.addEventListener('click', function () {

    divWebDevelopment.style.display = 'none';
    divMicrocontrollers.style.display = 'flex';
    divPython.style.display = 'none';
    divMechatronic.style.display = 'none';
    this.classList.add('active');
    buttonWebDevelopment.classList.remove('active');
    buttonPython.classList.remove('active');
    buttonMechatronic.classList.remove('active');
});

// Cuando se presiona el boton de python se muestra el div de python y se oculta el de web development, microcontrollers y mecatronica
buttonPython.addEventListener('click', function () {
    
    divWebDevelopment.style.display = 'none';
    divMicrocontrollers.style.display = 'none';
    divPython.style.display = 'flex';
    divMechatronic.style.display = 'none';
    this.classList.add('active');
    buttonWebDevelopment.classList.remove('active');
    buttonMicrocontrollers.classList.remove('active');
    buttonMechatronic.classList.remove('active');
});

// Cuando se presiona el boton de mecatronica se muestra el div de mecatronica y se oculta el de web development, microcontrollers y python
buttonMechatronic.addEventListener('click', function () {

    divWebDevelopment.style.display = 'none';
    divMicrocontrollers.style.display = 'none';
    divPython.style.display = 'none';
    divMechatronic.style.display = 'flex';
    this.classList.add('active');
    buttonWebDevelopment.classList.remove('active');
    buttonMicrocontrollers.classList.remove('active');
    buttonPython.classList.remove('active');
});


// habre el modal con la imagen que se le pase por parametro
function openModal(imageUrl) {

    imageModal.src = imageUrl;
    modal.style.display = 'flex';
    document.addEventListener('keydown', closeModalOnEscape);

}

// cierra el modal
function closeModal() {

    modal.style.display = 'none';
    document.removeEventListener('keydown', closeModalOnEscape);

}

// cierra el modal si se presiona la tecla escape
function closeModalOnEscape(event) {

    if (event.key === 'Escape') {
        closeModal();
    }
    
}
