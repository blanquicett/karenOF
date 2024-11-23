// Datos de plagas y enfermedades
const plagas = {
    'pulgones': {
        titulo: 'Control de Pulgones',
        descripcion: 'Los pulgones son insectos pequeños que se alimentan de la savia de las plantas, causando daños directos y transmitiendo enfermedades.',
        metodos: [
            'Monitoreo regular con trampas amarillas',
            'Control biológico con mariquitas y avispas parásitas',
            'Aplicación de jabón potásico',
            'Extractos naturales de ajo y chile'
        ]
    },
    'trips': {
        titulo: 'Manejo de Trips',
        descripcion: 'Los trips son insectos minúsculos que raspan la superficie de hojas y flores, causando decoloración y deformaciones.',
        metodos: [
            'Uso de mallas anti-insectos',
            'Trampas azules adhesivas',
            'Control biológico con ácaros depredadores',
            'Manejo de la humedad relativa'
            
        ]
    },
    'aranas': {
        titulo: 'Control de Ácaros',
        descripcion: 'Los ácaros son arácnidos microscópicos que causan daños en las hojas y pueden debilitar severamente las plantas.',
        metodos: [
            'Monitoreo con lupa de aumento',
            'Control de temperatura y humedad',
            'Aplicación de aceites minerales',
            'Introducción de ácaros depredadores'
        ]
    }
};

// Datos de diagnóstico
const diagnosticos = {
    'hojas-amarillas': {
        problema: 'Deficiencia nutricional o problema de pH',
        solucion: 'Verificar niveles de nutrientes y pH de la solución. Ajustar según sea necesario. Común en deficiencias de nitrógeno o hierro.'
    },
    'manchas-marrones': {
        problema: 'Posible infección fúngica',
        solucion: 'Reducir la humedad ambiental, mejorar la ventilación y considerar la aplicación de fungicidas orgánicos.'
    },
    'marchitamiento': {
        problema: 'Problemas en raíz o estrés hídrico',
        solucion: 'Verificar el sistema de riego, oxigenación y temperatura de la solución nutritiva. Revisar posible pudrición de raíces.'
    }
};

// Función para abrir modal
function openModal(tipo) {
    const modal = document.getElementById('modal');
    const titulo = document.getElementById('modal-titulo');
    const descripcion = document.getElementById('modal-descripcion');
    const metodos = document.getElementById('modal-metodos');
    
    const plaga = plagas[tipo];
    
    titulo.textContent = plaga.titulo;
    descripcion.textContent = plaga.descripcion;
    metodos.innerHTML = `
        <h3>Métodos de Control:</h3>
        <ul>
            ${plaga.metodos.map(metodo => `<li>${metodo}</li>`).join('')}
        </ul>
    `;
    
    modal.style.display = 'block';
}

// Función para cerrar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función de diagnóstico
function diagnosticar() {
    const sintoma = document.getElementById('diagnostic-tool').value;
    const resultadoDiv = document.getElementById('resultado-diagnostico');
    const textoResultado = document.getElementById('texto-diagnostico');

    if (sintoma && diagnosticos[sintoma]) {
        const diagnostico = diagnosticos[sintoma];
        textoResultado.innerHTML = `
            <strong>Problema detectado:</strong> ${diagnostico.problema}<br><br>
            <strong>Solución recomendada:</strong> ${diagnostico.solucion}
        `;
        resultadoDiv.style.display = 'block';
    } else {
        resultadoDiv.style.display = 'none';
    }
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Event Listener para cerrar con ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('modal').style.display = 'none';
    }
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});