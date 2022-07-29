function HostComponent({ renterName, renterImg }) {
    return (
        <div>
            <p>{renterName}</p>
            <img src={renterImg} alt="renter" />
        </div>
    );
}

export default HostComponent;
