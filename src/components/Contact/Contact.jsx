import React from 'react'
import "./Contact.css"
import sekil1 from "./div.w-12.png";
import sekil2 from "./img2.png";
import sekil3 from "./img3.png";
import sekil4 from "./img4.png";
import component from "./Component 1.png";
const Contact = () => {
    return (
        <>

            <div className='hero'>
                <h1 style={{fontSize : "30px"}}> Bizimlə Əlaqə  </h1>
                <p style={{ color: "#64748B",  fontSize: "15px"}}>Suallarınız varsa,bizimlə əlaqə saxlayın</p>
            </div>
            <main className='main'>
                <section className='bir'>
                    <div className='one'>
                        <div>
                            <img src={sekil1} alt="img1.png" />
                        </div>
                        <div>
                            <h3>  Ünvan</h3>
                            <p style={{ color: "#64748B", fontSize: "15px"}}>Bakı Şəhəri, Nəsimi Rayonu</p>
                            <p style={{ color: "#64748B", fontSize: "15px" }}> 28 May küçəsi</p>
                        </div>

                    </div>

                    <div className='two'>
                        <div>
                            <img src={sekil2} alt="img2.png" />
                        </div>
                        <div>
                            <h3> Telefon</h3>
                            <p style={{ color: "#64748B", fontSize: "15px" }}>+994 XX XXX XX XX</p>
                            <p style={{ color: "#64748B", fontSize: "15px" }}> +994 XX XXX XX XX</p>
                        </div>

                    </div>

                    <div className='thre'>
                        <div>
                            <img src={sekil3} alt="img3.png" />
                        </div>

                        <div>
                            <h3>Email</h3>
                            <p style={{ color: "#64748B" , fontSize: "15px"}}>info@ellin.az</p>
                            <p style={{ color: "#64748B", fontSize: "15px" }}> support@ellin.az</p>
                        </div>

                    </div>

                    <div className='four'>
                        <div>
                            <img src={sekil4} alt="img4.png" />
                        </div>
                        <div>
                            <h3> İş saatları</h3>
                            <p style={{ color: "#64748B" , fontSize: "15px"}}>Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                            <p style={{ color: "#64748B", fontSize: "15px" }}> Şənbə: 10:00 - 15:00</p>
                        </div>

                    </div>
                </section>
                <section className='iki'>
                    <div>
                        <h1 style={{fontSize : "30px"}}>Mesaj göndərin</h1><br />
                        <label htmlFor="ad"> Ad Soyad</label><br />
                        <input className='input1' type="text" placeholder='Adınızı daxil edin' /><br /><br />

                        <label htmlFor="email"> Email</label><br />
                        <input className='input2' type="gmail" placeholder='email@excample.com' /><br /><br />

                        <label htmlFor="tel"> Telefon</label><br />
                        <input className='input3' type="text" placeholder='+994 XX XXX XX XX' /><br /><br />

                        <label htmlFor="msj"> Mesaj</label><br />
                        <input className='input4' type="text" placeholder='Mesajınızı yazın...' /><br /><br />

                        <button className='button'>  <img src={component} alt="cmp" /> Göndər</button>

                    </div>
                </section>
            </main>

        </>
    )
}

export default Contact