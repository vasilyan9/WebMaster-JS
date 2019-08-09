import React from 'react';
import './Kap.css';

const Kap = () => {
    return (
        <div className="KapSection">
        <div>
            <span>
                Հասցե՝
                <span>
                    Թումանյան 10
                </span>
            </span>

            <span>
                Հեռախոս՝
                <span>
                    +374 93 94 07 99
                </span>
            </span>

            <span>
                Էլ․ հասցե՝
                <span>
                    vasilyanvahe@gmail.com   
                </span> 
            </span>
        </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8069020078474!2d44.51343321488719!3d40.19111057725508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd218c0499f7%3A0x54165e8b3d0b54c3!2z0JrQsNGB0LrQsNC0!5e0!3m2!1sru!2s!4v1565183268831!5m2!1sru!2s" 
                title="Map">
            </iframe>
        </div>
    )
}

export default Kap;