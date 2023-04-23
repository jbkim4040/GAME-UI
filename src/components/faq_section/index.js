import './style/index.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';


function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div className='faq_header' onClick={decoratedOnClick}>
            <h3>{children} </h3>
            <button>{isCurrentEventKey ? ' - ' : ' + '} </button>
        </div>

    );
}

function FaqSection() {
    return (
        <div id='faq' className="faq_container">
            <h1 className='theme-heading'> FAQ </h1>
            <div>
                <Accordion defaultActiveKey="">
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="0">What is NFT?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>NFT stands for 'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="1">Where can I find my NFTs?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Once minted, simply connect to your OpenSea account to view your NFTs.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="2">What does "MINT" means?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum blockchain.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="3">How much does it cost to buy one Lord Token?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>The price will be revealed soon.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>


    )
}

export default FaqSection;