import React from "react";
import m1 from "../assets/Images/m1.jpg";
import m2 from "../assets/Images/m2.jpg";
import m3 from "../assets/Images/m3.jpg";
import m4 from "../assets/Images/m4.jpg";
import T1 from "../assets/Images/T1.jpg";
import T2 from "../assets/Images/T2.jpg";
import t from "../assets/Images/t.jpg";
import island from "../assets/Images/island_peak_384658935.jpeg.jpg";
import mera from "../assets/Images/mera_peak_real786299810.jpeg.jpg";
import ama from "../assets/Images/ama_dablam_real1051952267.jpg";
import lobuche from "../assets/Images/lobuche_east_peak_1547316301.jpg";
import chulu from "../assets/Images/chulu_east_real506644801.jpg";
import everest from "../assets/Images/everest_real1067622239.png";
import '../index.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 class="text-center aboutone fw-bold">Welcome to <span class="abouttwo">ALTERNATIVE NEPAL TREKS
                            & EXPEDITION,</span> a leading operator in trekking and
                            peak climbing in Nepal.</h2>
                        <p class="text-center text-secondary fs-5">Alternative Nepal is a bespoke adventure outfit. Whatever
                            your desire, our team can tailor trips to meet
                            your needs. We offer rafting, trekking, climbing and mountain biking or the mix of all to get you
                            off
                            the beaten tourist track. Our guides have each spent more than a decade exploring and guiding
                            Nepal’s
                            wilderness, discovering new routes, rivers and trails. Please feel free to request a quote for your
                            next
                            trip.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul class="d-flex justify-content-center list-unstyled fs-4 gap-2">
                            <li class="d-flex align-items-center gap-1 fs-6">
                                <i class="bi bi-star text-warning"></i>Have High Rating
                            </li>
                            <li class="d-flex align-items-center gap-1 fs-6">
                                <i class="bi bi-pin-map text-primary"></i>
                                Best Locations
                            </li>
                            <li class="d-flex align-items-center gap-1 fs-6">
                                <i class="bi bi-x-octagon text-danger"></i>
                                Free Cancellation
                            </li>

                            <li class="d-flex align-items-center gap-1 fs-6">
                                <i class="bi bi-wallet text-success"></i>Payment Options
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-center align-items-center gap-3">
                            <h3 class="fw-bold fs-1 text-secondary">4.5</h3>
                            <div class="px-2">
                                <ul class="d-flex list-unstyled gap-1 mb-0 justify-content-center">
                                    <li><i class="bi bi-star-fill text-warning"></i></li>
                                    <li><i class="bi bi-star-fill text-warning"></i></li>
                                    <li><i class="bi bi-star-fill text-warning"></i></li>
                                    <li><i class="bi bi-star-fill text-warning"></i></li>
                                    <li><i class="bi bi-star-half text-warning"></i></li>
                                </ul>
                                <p class="mb-0">Clients Love Us!</p>
                            </div>
                            <div>
                                <button class="btn btn-dark rounded-3 px-3 py-2">Explore now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary mt-5 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 d-flex justify-content-between">
                                <h2 className="text-uppercase fw-bold fs-1 text-white" style={{ letterSpacing: 3 }}>Expenditions
                                </h2>
                                <button className="btn btn-primary mb-0">View All</button>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="bg-white expenditions shadow rounded-5 mt-4">
                                        <div>
                                            <img src={m1} alt="" className="w-100 rounded-top-5 rounded-bottom-1"
                                                style={{ height: 235 }} />
                                        </div>
                                        <div className="px-3 pb-2">
                                            <p className="text-uppercase mt-2 fw-bold text-success mb-0">Expenditions</p>
                                            <p className="fs-2 fw-bold mb-0 sixthousand">6000M</p>
                                            <p className="" style={{ textAlign: "justify" }}>Nepal has the highest mountain in the
                                                world, Mount Everest as well as 1,310 peaks over 6,000 m height.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="bg-white expenditions shadow rounded-5 mt-4">
                                        <div>
                                            <img src={m2} alt="" className="w-100 rounded-top-5 rounded-bottom-1"
                                                style={{ height: 235 }} />
                                        </div>
                                        <div className="px-3 pb-2">
                                            <p className="text-uppercase mt-2 fw-bold text-success mb-0">Expenditions</p>
                                            <p className="fs-2 fw-bold mb-0 sixthousand">7000M</p>
                                            <p className="" style={{ textAlign: "justify" }}>Nepal has the highest mountain in the
                                                world, Mount Everest as well as 1,310 peaks over 6,000 m height.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="bg-white expenditions shadow rounded-5 mt-4">
                                        <div>
                                            <img src={m3} alt="" className="w-100 rounded-top-5 rounded-bottom-1"
                                                style={{ height: 235 }} />
                                        </div>
                                        <div className="px-3 pb-2">
                                            <p className="text-uppercase mt-2 fw-bold text-success mb-0">Expenditions</p>
                                            <p className="fs-2 fw-bold mb-0 sixthousand">8000M</p>
                                            <p className="" style={{ textAlign: "justify" }}>Nepal has the highest mountain in the
                                                world, Mount Everest as well as 1,310 peaks over 6,000 m height.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="bg-white expenditions shadow rounded-5 mt-4">
                                        <div>
                                            <img src={m4} alt="" className="w-100 rounded-top-5 rounded-bottom-1"
                                                style={{ height: 235 }} />
                                        </div>
                                        <div className="px-3 pb-2">
                                            <p className="text-uppercase mt-2 fw-bold text-success mb-0">Expenditions</p>
                                            <p className="fs-2 fw-bold mb-0 sixthousand">5000M</p>
                                            <p className="" style={{ textAlign: "justify" }}>Nepal has the highest mountain in the
                                                world, Mount Everest as well as 1,310 peaks over 6,000 m height.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mt-4 d-flex justify-content-between">
                            <h2 className="text-uppercase fw-bold fs-1" style={{ letterSpacing: 3 }}>Trekking</h2>
                            <button className="btn text-white trekking" style={{ backgroundColor: " #229AC8" }}>View All</button>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="bg-white expenditions shadow rounded-5 mt-4">
                                    <div>
                                        <img src={T1} alt=""
                                            class="w-100 rounded-top-5 rounded-bottom-1  object-fit-cover"
                                            style={{ height: 450 }} />
                                    </div>
                                    <div class="px-3 pb-2">
                                        <p class="text-uppercase mt-2 fw-bold fs-6 text-success mb-0">Trekking</p>
                                        <p class="fs-5 fw-bold mb-0 sixthousand">Trekking</p>
                                        <p class="fs-4" style={{ textAlign: "justify" }}>Kanchenjunga Region</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="bg-white expenditions shadow rounded-5 mt-4">
                                    <div>
                                        <img src={T2} alt=""
                                            class="w-100 rounded-top-5 rounded-bottom-1 object-fit-cover"
                                            style={{ height: 450 }} />
                                    </div>
                                    <div class="px-3 pb-2">
                                        <p class="text-uppercase mt-2 fw-bold fs-6 text-success mb-0">Trekking</p>
                                        <p class="fs-5 fw-bold mb-0 sixthousand">High Passes Trekking</p>
                                        <p class="fs-4" style={{ textAlign: "justify" }}>High Passes Trekking</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="bg-white expenditions shadow rounded-5 mt-4">
                                    <div>
                                        <img src={t} alt=""
                                            class="w-100 rounded-top-5 rounded-bottom-1 object-fit-cover"
                                            style={{ height: 450 }} />
                                    </div>
                                    <div class="px-3 pb-2">
                                        <p class="text-uppercase mt-2 fw-bold fs-6 text-success mb-0">Trekking</p>
                                        <p class="fs-5 fw-bold mb-0 sixthousand">GHT</p>
                                        <p class="fs-4" style={{ textAlign: "justify" }}>GHT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-black w-100 my-5">
                <div class="container p-5 ">
                    <div class="col-lg-12">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h3 class="text-white fw-bold">Special Expeditions 2025</h3>
                            </div>
                            <div>
                                <button class="btn btn-sm btn-primary fw-bold">View All</button>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center g-4 py-4 ">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="rounded-4 overflow-hidden bg-white cardHov">
                                <img src={island} alt="" class="w-100 "
                                    style={{ height: 250 }} />
                                <div class="p-3">
                                    <h3 class="fw-bold title">Island Peak</h3>
                                    <p class="text-secondary">Island Peak is one of the most popular peak of Nepal. Island Peak
                                        is located in eastern part of Nepal. It is known as Imja Tse too...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="text-secondary fw-bold ">18 days</h4>
                                        </div>
                                        <div>
                                            <p class="text-secondary fw-bold mb-0 ">6000M Peaks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="rounded-4 overflow-hidden bg-white cardHov">
                                <img src={mera} alt="" class="w-100 "
                                    style={{ height: 250 }} />
                                <div class="p-3">
                                    <h3 class="fw-bold title">Mera Peak</h3>
                                    <p class="text-secondary">Island Peak is one of the most popular peak of Nepal. Island Peak
                                        is located in eastern part of Nepal. It is known as Imja Tse too...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="text-secondary fw-bold ">18 days</h4>
                                        </div>
                                        <div>
                                            <p class="text-secondary fw-bold mb-0 ">6000M Peaks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="rounded-4 overflow-hidden bg-white cardHov">
                                <img src={ama} alt="" class="w-100" style={{ height: 250 }} />
                                <div class="p-3">
                                    <h3 class="fw-bold title">Ama Dablam</h3>
                                    <p class="text-secondary">Island Peak is one of the most popular peak of Nepal. Island Peak
                                        is located in eastern part of Nepal. It is known as Imja Tse too...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="text-secondary fw-bold ">18 days</h4>
                                        </div>
                                        <div>
                                            <p class="text-secondary fw-bold mb-0 ">6000M Peaks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="rounded-4 overflow-hidden bg-white cardHov">
                                <img src={lobuche} alt="" class="w-100 "
                                    style={{ height: 250 }} />
                                <div class="p-3">
                                    <h3 class="fw-bold title">Lobuche East</h3>
                                    <p class="text-secondary">Island Peak is one of the most popular peak of Nepal. Island Peak
                                        is located in eastern part of Nepal. It is known as Imja Tse too...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="text-secondary fw-bold ">18 days</h4>
                                        </div>
                                        <div>
                                            <p class="text-secondary fw-bold mb-0 ">6000M Peaks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="rounded-4 overflow-hidden bg-white cardHov">
                                <img src={chulu} alt="" class="w-100 " style={{ height: 250 }} />
                                <div class="p-3">
                                    <h3 class="fw-bold title">Chulu East</h3>
                                    <p class="text-secondary">Island Peak is one of the most popular peak of Nepal. Island Peak
                                        is located in eastern part of Nepal. It is known as Imja Tse too...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="text-secondary fw-bold ">18 days</h4>
                                        </div>
                                        <div>
                                            <p class="text-secondary fw-bold mb-0 ">6000M Peaks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="rounded-4 overflow-hidden bg-white cardHov">
                                <img src={everest} alt="" class="w-100" style={{ height: 250 }} />
                                <div class="p-3">
                                    <h3 class="fw-bold title">Everest</h3>
                                    <p class="text-secondary">Island Peak is one of the most popular peak of Nepal. Island Peak
                                        is located in eastern part of Nepal. It is known as Imja Tse too...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="text-secondary fw-bold ">18 days</h4>
                                        </div>
                                        <div>
                                            <p class="text-secondary fw-bold mb-0 ">6000M Peaks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bg-dark rounded-4 py-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <h1 class="text-center text-secondary fw-bold">Subscribe & Get Special <br /> Discount!</h1>
                        </div>
                        <div class="text-center text-secondary">
                            <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man <br />
                                children rejoiced.</p>
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-center">
                                <form action="" method="Post" className="bg-white d-flex">
                                    <input type="text" className="form-control py-3 border-none subs" placeholder="Enter Your Email"/>
                                    <button class="btn end-0"><i class="bi bi-arrow-right-circle-fill fs-1"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;