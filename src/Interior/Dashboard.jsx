import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { Modal, Button } from 'react-bootstrap'; 
import {
    Chart,
    LineController,
    LineElement,
    BarController,
    BarElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


function Dashboard() {
    // Estado para la hora actual
    const [currentTime, setCurrentTime] = useState('');
    // Estado para el modal de asistencia
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);
    // Estado para el modal de personalización de reporte
    const [showReportModal, setShowReportModal] = useState(false);
    // Lista de alumnos
    const [students, setStudents] = useState([
        { id: 1, name: 'Martínez Ramírez Dessire Sheresada', present: true },
        { id: 2, name: 'Carvente Miguel Isai', present: false },
        { id: 3, name: 'Castañeda Castillo Jose Manuel', present: true },
        { id: 4, name: 'Lopez Alcantara Yaneth Berenice', present: false },
        { id: 5, name: 'Islas Cabrera Erick Uriel', present: true },
    ]);

    useEffect(() => {
        // Registrar controladores de gráficos
        Chart.register(
            LineController,
            LineElement,
            BarController,
            BarElement,
            PointElement,
            LinearScale,
            CategoryScale,
            Title,
            Tooltip,
            Legend
        );

        let temperatureChart = null;
        let humidityChart = null;

        // Función para inicializar los gráficos
        const initializeCharts = () => {
            // Destruir gráficos anteriores si existen
            if (temperatureChart) temperatureChart.destroy();
            if (humidityChart) humidityChart.destroy();

            // Gráfico de temperatura
            var ctx1 = document.getElementById('temperatureChart').getContext('2d');
            temperatureChart = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM'],
                    datasets: [{
                        label: 'Temperatura (°C)',
                        data: [22, 24, 23, 26, 25],
                        borderColor: 'rgba(255, 165, 0, 1)', // Naranja brillante
                        backgroundColor: 'rgba(255, 165, 0, 0.2)', // Fondo translúcido naranja
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                color: 'white' 
                            }
                        },
                        y: {
                            ticks: {
                                color: 'white' 
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white' 
                            }
                        }
                    }
                }
            });

            // Gráfico de humedad
            var ctx2 = document.getElementById('humidityChart').getContext('2d');
            humidityChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM'],
                    datasets: [{
                        label: 'Humedad (%)',
                        data: [45, 50, 52, 48, 46],
                        backgroundColor: 'rgba(54, 162, 235, 0.8)', 
                        borderColor: 'rgba(54, 162, 235, 1)', 
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                color: 'white' 
                            }
                        },
                        y: {
                            ticks: {
                                color: 'white' 
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white' 
                            }
                        }
                    }
                }
            });
        };

        // Inicializar los gráficos
        initializeCharts();

        // Limpiar/destruir gráficos cuando el componente se desmonte
        return () => {
            if (temperatureChart) temperatureChart.destroy();
            if (humidityChart) humidityChart.destroy();
        };
    }, []);

    // Actualizar la hora cada segundo
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        // Actualizar la hora cada segundo
        const intervalId = setInterval(updateTime, 1000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    // Funciones para manejar la apertura y cierre de modales
    const handleShowAttendanceModal = () => setShowAttendanceModal(true);
    const handleCloseAttendanceModal = () => setShowAttendanceModal(false);
    const handleShowReportModal = () => setShowReportModal(true);
    const handleCloseReportModal = () => setShowReportModal(false);

    return (
        <div className="dashboard-container">
            <div className="row dashboard-wrapper">
                <div className="col-md-8">
                    <div className="topbar text-center mb-4">
                        <h4 className="fw-bold">Dashboard</h4>
                        <p>Bienvenido al panel de gestión de aulas inteligentes.</p>
                    </div>

                    <div className="main-content">
                        <div className="row my-4">
                            <div className="col-md-4">
                                <div className="card shadow-sm dashboard-card" onClick={handleShowAttendanceModal} style={{ cursor: 'pointer' }}>
                                    <h5><i className="bi bi-person-circle me-2"></i>Asistencia Total</h5>
                                    <h2 className="fw-bold">25 Estudiantes</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm dashboard-card">
                                    <h5><i className="bi bi-building me-2"></i>Aula en Uso</h5>
                                    <h2 className="fw-bold">B-102</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm dashboard-card">
                                    <h5><i className="bi bi-clock me-2"></i>Tiempo Restante</h5>
                                    <h2 className="fw-bold">{currentTime}</h2> {/* Mostrar la hora actual */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card shadow-sm dashboard-card" style={{ height: '400px' }}>
                                    <h5>Temperatura del Aula</h5>
                                    <canvas id="temperatureChart"></canvas>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm dashboard-card" style={{ height: '400px' }}>
                                    <h5>Nivel de Humedad</h5>
                                    <canvas id="humidityChart"></canvas>
                                </div>
                            </div>
                        </div>

                        {/* Nuevos recuadros abajo de las gráficas */}
                        <div className="row my-4">
                            <div className="col-md-6">
                                <div className="card shadow-sm dashboard-card">
                                    <h5><i className="bi bi-graph-up-arrow me-2"></i>Alumnos Faltantes</h5>
                                    <h2 className="fw-bold">5</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm dashboard-card">
                                    <h5><i className="bi bi-check-circle me-2"></i>Reporte de asistencia</h5>
                                    <Button className='' variant="primary" onClick={handleShowReportModal}>Generar Reporte de Asistencia</Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para la lista de alumnos */}
            <Modal show={showAttendanceModal} onHide={handleCloseAttendanceModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Lista de Alumnos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="list-group">
                        {students.map(student => (
                            <div 
                                key={student.id} 
                                className={`list-group-item d-flex justify-content-between align-items-center ${student.present ? 'bg-success text-white' : 'bg-danger text-white'}`}
                            >
                                <span>{student.name}</span>
                                <span className="badge">{student.present ? 'Presente' : 'Ausente'}</span>
                            </div>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAttendanceModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

            {/* Modal para personalizar el reporte de asistencia */}
            <Modal show={showReportModal} onHide={handleCloseReportModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Personalizar Reporte de Asistencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="dateRange" className="form-label">Rango de Fechas</label>
                            <input type="date" className="form-control" id="startDate" />
                            <input type="date" className="form-control mt-2" id="endDate" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='bg-danger' onClick={handleCloseReportModal}>Cerrar</Button>
                    <Button variant="primary" className='bg-success' onClick={handleCloseReportModal}>Generar Reporte</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Dashboard;
