import react from "react"
import "../../sass/pages/_treatments.scss"

export default function Banner() {
    return (
        <div className="middle-bg">
            <div className='middle-bg-icons'>
                <div className='middle-bg-icons-col'>

                    <i class="fa-solid fa-tooth fa-4x" />
                    <h3>Uzman Hekim</h3>
                </div>
                <div className='middle-bg-icons-col'>

                    <i class="fa-solid fa-magnifying-glass-chart fa-4x" />
                    <h3>Kaliteli Ekipmanlar</h3>
                </div>
                <div className='middle-bg-icons-col'>

                    <i class="fa-solid fa-square-plus fa-4x" />
                    <h3>Konforlu Tedavi</h3>
                </div>
            </div>
        </div>
    )
}