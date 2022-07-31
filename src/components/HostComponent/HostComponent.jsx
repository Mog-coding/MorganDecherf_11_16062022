import './HostComponent.css';

function HostComponent({ renterName, renterImg }) {
    return (
        <div className="hostContainer">
            <p className="hostName">{renterName}</p>
            <img className="hostImg" src={renterImg} alt="renter" />
        </div>
    );
}

export default HostComponent;
