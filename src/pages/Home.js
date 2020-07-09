import React from 'react';
import { Link } from "react-router-dom";

/**
 * 3. Function Component
 * 6. Extracting Component
 */
function Home() {
    return (
        <div className="container" style={{paddingBottom: '50px'}}>
            <h2>Home</h2>

            <div className="jumbotron">
                <h1 className="display-4">UWUdemy</h1>
                <p className="lead">Kursus Online. Belajar Koding</p>
                <hr className="my-4" />
                <p>Pelajari topik apa saja, kapan saja. Jelajahi ribuan kursus masing-masing mulai US$12,99.</p>
                <p className="lead">
                    <Link to="/products" className="btn btn-primary btn-lg">
                        Lihat Semua Kelas
                    </Link>                 
                </p>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <strong>100.000 kursus online</strong>
                    <br />
                    <span>Nikmati berbagai topik baru</span>
                </div>

                <div className="col-md-4">
                    <strong>Instruksi dari pakarnya</strong>
                    <br />
                    <span>Temukan instruktur yang tepat untuk Anda</span>
                </div>

                <div className="col-md-4">
                    <strong>Akses seumur hidup</strong>
                    <br />
                    <span>Belajar sesuai jadwal Anda</span>
                </div>
            </div>
        </div>        
    );
}

export default Home;
