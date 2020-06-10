import React, { Component } from 'react';

class OurServices extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <section id="our-services" class="our-services">
                <div className='container'>
                    <div class="content-wrapper">
                        <h1 data-aos="fade-right">
                            Our
          <span>services.</span>
                        </h1>

                        <div class="flex-container">
                            <div class="services">
                                <div class="services__group services__group--1">
                                    <div class="content-wrapper" v-for="(obj, key) in services1" :key="key">
                <div class="service">
                                        <div class="img-wrapper">
                                            <img :src="obj.serviceIcn" :alt="obj.alt" data-aos="fade-left" />
                  </div>

                                        <div class="copy-wrapper">
                                            <h2 data-aos="fade-right">{{ obj.serviceHdr }}</h2>
                                            <p data-aos="fade-left">{{ obj.serviceExcerpt }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="device-img">
                                <div class="img-wrapper">
                                    <img
                                        src="./../assets/imgs/home/iphone-x.png"
                                        alt="image of iPhone"
                                        data-aos="zoom-in"
                                    />
                                </div>
                            </div>

                            <div class="services__group services__group--2">
                                <div class="content-wrapper" v-for="(obj, two) in services2" :key="two">
                <div class="service">
                                    <div class="img-wrapper">
                                        <img :src="obj.serviceIcn" :alt="obj.alt" data-aos="fade-right" />
                  </div>

                                    <div class="copy-wrapper">
                                        <h2 data-aos="fade-left">{{ obj.serviceHdr }}</h2>
                                        <p data-aos="fade-right">{{ obj.serviceExcerpt }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-img-desktop">
                        <div class="img-wrapper">
                            <img
                                src="./../assets/imgs/home/iphone-x.png"
                                alt="image of iPhone"
                                data-aos="fade-right"
                            />
                        </div>
                    </div>
                </div>
      </div>
    </b - container >
  </section >
        );
    }
}

export default OurServices;