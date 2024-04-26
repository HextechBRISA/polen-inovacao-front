import styled from 'styled-components';
import style from 'styled-jsx/style';
import Banner from '../../../public/Banner.jpg';


export function Topbanner (){
    return(
           <Top>
                <ImgBanner>
                    <Image src={Banner.src} alt="logoheader"/>
                    <BannerText>
                       <h1>Locação de Espaços</h1>
                       <button>Faça seu evento conosco</button>
                    </BannerText>
                  
                </ImgBanner>
           </Top>
    )

}



const Top = styled.div`
    background-color: white 20;
 .img-card{
        border-right: 1px solid white;
        width: 165px;
    }`; 
    
const ImgBanner = styled.div`
width: 100%;
height: 300px;
position: relative;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `; 

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;
