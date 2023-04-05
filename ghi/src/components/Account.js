import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AccountDetail = () => {
  const [account, setAccount] = useState([]);
  const { thisAccount } = useParams();

  const getAccountData = async () => {
    const response = await fetch(
      `http://localhost:8000/api/accounts/{account_id}?id=${thisAccount}`
    );
    if (response.ok) {
      const data = await response.json();
      setAccount(data);
    }
  };

  useEffect(() => {
    getAccountData();
  }, [thisAccount]);

  return (
    <div className="row bg-primary">
      <div className="col">
        <img src={account.picture_url} />
      </div>
      <div className="col">
        <h1>
          {account.first_name} + {account.last_name}
        </h1>
      </div>
      {/* <div className="col-4 bg-info min-vh-100">
        <div>
          <h1 className="text-center">{account.name}</h1>
          <div className="text-center">RATINGS</div>
        </div>
        <div className="rounded bg-white m-3">
          <h2 className="text-center">Resort Info</h2>
          <p className="text-center">{resort.elevation} m</p>
          <p className="text-center">
            {resort.address} {resort.city}, {resort.state} {resort.zipcode}
          </p>
          <p className="text-center">{resort.price}</p>
          <p className="text-center">Distance/Travel Time</p>
        </div>
      </div> */}
      <div className="col-auto">
        <p>Test</p>
      </div>
    </div>
  );
};
export default AccountDetail;
