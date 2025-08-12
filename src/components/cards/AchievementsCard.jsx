import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Organization = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  padding-top: 90px;
`;

const ModalImage = styled.img`
  width: auto;
  height: auto;
  max-width: 85vw;
  max-height: 85vh;
  border-radius: 12px;
  box-shadow: 0 0 24px #000;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  background: #fff;
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10000;
`;

const AchievementsCard = ({ achievement }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <VerticalTimelineElement
        icon={
          <img
            width="100%"
            height="100%"
            alt={achievement?.title}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "default",
            }}
            src={achievement?.img}
          />
        }
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          background: "#1d1836",
          color: "#fff",
          boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          backgroundColor: "rgba(17, 25, 40, 0.83)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          borderRadius: "6px",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
        }}
        date={achievement?.date}
      >
        <Top>
          <Image
            src={achievement?.img}
            alt={achievement?.title}
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          />
          <Body>
            <Title>{achievement?.title}</Title>
            <Organization>{achievement?.organization}</Organization>
            <Date>{achievement?.date}</Date>
          </Body>
        </Top>
        <Description>
          {achievement?.desc && <Span>{achievement.desc}</Span>}
          {achievement?.skills && (
            <>
              <br />
              <Skills>
                <b>Skills</b>
                <ItemWrapper>
                  {achievement?.skills?.map((skill, index) => (
                    <Skill key={index}>• {skill}</Skill>
                  ))}
                </ItemWrapper>
              </Skills>
            </>
          )}
        </Description>
      </VerticalTimelineElement>
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(false);
            }}
          >
            &times;
          </CloseButton>
          <ModalImage
            src={achievement?.img}
            alt={achievement?.title}
            onClick={(e) => e.stopPropagation()}
          />
        </ModalOverlay>
      )}
    </>
  );
};

export default AchievementsCard;
