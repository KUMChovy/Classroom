import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = ({darkMode}) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);

  const handleShowPrivacy = () => setShowPrivacyModal(true);
  const handleClosePrivacy = () => setShowPrivacyModal(false);
  const handleShowFAQ = () => setShowFAQModal(true);
  const handleCloseFAQ = () => setShowFAQModal(false);

  return (
    <div  className={darkMode ? "dark-mode" : "light-mode"}>
      <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Cody Go!. Todos los derechos reservados.</p>
          </div>
          <div className="footer-right">
            <nav>
              <ul>
                <li><a href="https://internetdelascosas.xyz/">Blog de noticias</a></li>
                <li>
                  <a href="#faq" onClick={handleShowFAQ}>Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="#privacy" onClick={handleShowPrivacy}>Política de Privacidad</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal para Política de Privacidad */}
      <Modal show={showPrivacyModal} onHide={handleClosePrivacy}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Política de Privacidad</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Términos y Condiciones</h4>
          <p>Introducción: Al utilizar nuestros productos y servicios, usted acepta estos términos y condiciones. Nos reservamos el derecho de modificar estos términos en cualquier momento, notificándole con antelación.</p>
          <p>Propiedad Intelectual: Todo el contenido, diseño, código fuente y gráficos de nuestros productos son propiedad exclusiva de Cody Go! y están protegidos por las leyes de derechos de autor.</p>
          <p>Uso de los Servicios: Usted se compromete a utilizar nuestros servicios de manera legal y adecuada. No se permite el uso de nuestros productos para fines ilícitos o fraudulentos.</p>
          <p>Limitación de Responsabilidad: Cody Go! no se hace responsable de ningún daño indirecto, incidental o especial derivado del uso de nuestros servicios.</p>
          <p>Modificaciones y Terminación: Podemos modificar o interrumpir temporal o permanentemente cualquier parte de nuestros servicios en cualquier momento, con o sin previo aviso.</p>
          <p>Jurisdicción: Estos términos se regirán e interpretarán de acuerdo con las leyes locales del país en el que Cody Go! opere.</p>
          <h4>Política de Privacidad</h4>
          <p>Recopilación de Información: Recopilamos información personal como nombre, correo electrónico y otra información relacionada cuando interactúa con nuestros servicios. Esta información es necesaria para mejorar la experiencia del usuario y proporcionar un servicio adecuado.</p>
          <p>Uso de Información: Utilizamos la información recopilada para personalizar el contenido, mejorar nuestros servicios, y enviar notificaciones relacionadas con su cuenta.</p>
          <p>Seguridad de los Datos: La seguridad de su información personal es nuestra prioridad. Usamos medidas técnicas y organizativas avanzadas para proteger sus datos contra accesos no autorizados o alteraciones.</p>
          <p>Divulgación a Terceros: No compartimos ni vendemos su información personal a terceros, salvo en circunstancias necesarias como cumplir con una ley, reglamento o proceso legal.</p>
          <p>Derechos del Usuario: Usted tiene derecho a acceder, modificar o eliminar su información personal en cualquier momento poniéndose en contacto con nuestro equipo de soporte.</p>
          <h4>Política de Devoluciones</h4>
          <p>Plazo de Devoluciones: Si no está satisfecho con su compra, puede solicitar una devolución dentro de los 30 días posteriores a la fecha de compra.</p>
          <p>Condiciones para Devoluciones: El producto debe estar en su estado original, sin daños ni alteraciones, y debe incluir el embalaje original. Los servicios digitales no son reembolsables una vez utilizados o descargados.</p>
          <p>Proceso de Devolución: Para iniciar una devolución, póngase en contacto con nuestro equipo de soporte con su número de pedido y la razón de la devolución. Le proporcionaremos las instrucciones para devolver el producto.</p>
          <p>Reembolsos: Una vez recibamos y verifiquemos el producto, emitiremos el reembolso dentro de los 14 días hábiles, utilizando el mismo método de pago que utilizó para la compra.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrivacy}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Preguntas Frecuentes */}
      <Modal show={showFAQModal} onHide={handleCloseFAQ}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Preguntas Frecuentes</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>1. ¿Qué servicios ofrece Cody Go?</h4>
          <p>Cody Go ofrece una variedad de servicios de desarrollo digital, incluyendo sitios web, aplicaciones móviles, herramientas de gestión del tiempo y plataformas educativas.</p>

          <h4>2. ¿Cómo puedo contactar a Cody Go?</h4>
          <p>Puedes contactarnos a través de nuestro formulario de contacto en la página web, enviando un correo electrónico a [correo@codygo.com] o llamando al [número de teléfono].</p>

          <h4>3. ¿Cody Go ofrece soporte técnico?</h4>
          <p>Sí, ofrecemos soporte técnico para todos nuestros productos y servicios. Puedes contactarnos para asistencia a través de nuestro equipo de soporte.</p>

          <h4>4. ¿Qué métodos de pago acepta Cody Go?</h4>
          <p>Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, PayPal y transferencias bancarias.</p>

          <h4>5. ¿Puedo solicitar una personalización en mi proyecto?</h4>
          <p>Sí, ofrecemos opciones de personalización según las necesidades de nuestros clientes. Contáctanos para discutir tus requisitos específicos.</p>

          <h4>6. ¿Cody Go tiene políticas de devolución?</h4>
          <p>Sí, ofrecemos una política de devolución de 30 días para los productos adquiridos. Si no estás satisfecho, contáctanos para iniciar el proceso de devolución.</p>

          <h4>7. ¿Cody Go cumple con las normativas de protección de datos?</h4>
          <p>Sí, cumplimos con las normativas de protección de datos y tenemos una política de privacidad que describe cómo recopilamos y utilizamos tu información.</p>

          <h4>8. ¿Dónde puedo encontrar testimonios de clientes?</h4>
          <p>Puedes encontrar testimonios de nuestros clientes en la sección de "Testimonios" de nuestra página web.</p>

          <h4>9. ¿Cody Go realiza cursos o talleres?</h4>
          <p>Sí, ofrecemos cursos y talleres sobre desarrollo web y móvil. Consulta nuestra sección de "Cursos" para más información.</p>

          <h4>10. ¿Cómo puedo estar al tanto de las novedades y ofertas de Cody Go?</h4>
          <p>Puedes suscribirte a nuestro boletín de noticias para recibir actualizaciones sobre nuevos servicios, ofertas especiales y eventos.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFAQ}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
    </div>
    
  );
};

export default Footer;
