import { useEffect } from "react";
import BankIcon from "../../assets/bank-1.png";
import BankIcon2 from "../../assets/bank-2.svg";
import CloseIcon from "../../assets/close.svg";
import { CloseBtn, Divider, GreenText, Header, Icon, InfoBox, Label, Left, Overlay, Popup, Right, Row, RowSmall, SectionTitle, SettleBtn, Title, TotalText, Value } from "./settlement-popup.styled";
const SettlementPopup = ({ onClose }: { onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <Overlay onClick={onClose}>
            <Popup onClick={(e) => e.stopPropagation()}>
                <Header>
                    <Title>Manage QR/POS</Title>
                    <CloseBtn onClick={onClose}>
                        <img src={CloseIcon} alt="close" />
                    </CloseBtn>
                </Header>

                <Row>
                    <Left>
                        <Icon src={BankIcon2} alt="bank" />
                        <span>Today's Total Collection</span>
                    </Left>
                    <Right>₹1,023</Right>
                </Row>

                <Row>
                    <Left>
                        <Icon src={BankIcon} alt="settled" />
                        <GreenText>Already Settled</GreenText>
                    </Left>
                    <Left>₹100</Left>
                </Row>

                <Divider />

                <SectionTitle>SETTLEMENT CALCULATION</SectionTitle>
                <RowSmall>
                    <Label>Amount yet to be settled</Label>
                    <Value>IBRAHIM MOHAMMEDALI</Value>
                </RowSmall>

                <RowSmall>
                    <Label>Past pending amount</Label>
                    <Value>092141241127</Value>
                </RowSmall>

                <RowSmall>
                    <Label>Charges</Label>
                    <Value>07, Aug 2024</Value>
                </RowSmall>

                <Divider />

                <Row>
                    <TotalText>
                        <Icon src={BankIcon2} alt="bank" />
                        <span>Today's Total Collection</span>
                    </TotalText>
                    <TotalText>₹1,023</TotalText>
                </Row>

                <InfoBox>
                    <p>
                        Tap <b>‘Settle Now’</b> to instantly get settlements in your
                        bank account.
                    </p>
                    <p className="charge">Settle Now is Chargeable</p>
                    <SettleBtn>Settle Now</SettleBtn>
                </InfoBox>
            </Popup>
        </Overlay>
    );
};

export default SettlementPopup;
