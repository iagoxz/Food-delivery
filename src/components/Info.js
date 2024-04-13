import { useLayoutEffect, useRef } from "react";
import React from "react";
import delivery from "../images/delivery.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".info-img", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".info-food",
        //markers: true,
        start: "top 80%",
        end: "bottom 580px",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf(".info-img");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".info-content", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".info-food",
        start: "top 87%",
        end: "bottom 650px",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf(".info-content");
    };
  }, []);

  return (
    <div className="info space-top space-bottom">
      <div className="info-food">
        <div className="info-img">
          <img src={delivery} alt="delivery" />
        </div>

        <div className="info-text space-horizontal">
          <div className="info-container space-vertical">
            <div className="info-content space-inside">
              <h1 className="info-title">SOBRE NÓS</h1>
              <p className="textosobre">
                Bem-vindo ao Food Delivery - seu destino para uma experiência de
                entrega de alimentos simplesmente deliciosa! Somos apaixonados
                por conectar os amantes da gastronomia com uma variedade de
                pratos irresistíveis, entregues diretamente à sua porta.
                <br />
                No Food Delivery, a conveniência encontra o sabor em cada
                pedaço. Com uma ampla seleção de restaurantes locais, estamos
                aqui para satisfazer todos os seus desejos culinários, desde
                pratos clássicos até iguarias gourmet. Nossa plataforma
                intuitiva e fácil de usar permite que você explore menus
                variados, faça pedidos com apenas alguns cliques e desfrute de
                uma refeição de qualidade no conforto da sua casa.
              </p>
              <div className="button-store">
                <a href="#" target="_blank" rel="noreferrer">
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M20.331 14.644l-13.794-13.831 17.55 10.075zM2.938 0c-0.813 0.425-1.356 1.2-1.356 2.206v27.581c0 1.006 0.544 1.781 1.356 2.206l16.038-16zM29.512 14.1l-3.681-2.131-4.106 4.031 4.106 4.031 3.756-2.131c1.125-0.893 1.125-2.906-0.075-3.8zM6.538 31.188l17.55-10.075-3.756-3.756z"></path>{" "}
                    </g>
                  </svg>
                  BAIXE O APP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
