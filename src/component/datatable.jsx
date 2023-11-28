export const DataTable = ({ data }) => (
    <table className="w-5/6 ml-28  text-fdfdfd text-center">
        <thead className="text-adaeaf font-yatra tracking-widest" >
            <tr >
                <th >City</th>
                <th>State</th>
                <th >Country</th>
                <th >Postcode</th>
                <th >Street Number</th>
                <th >Name</th>
                <th >Latitude</th>
                <th >Longitude</th>
            </tr>
        </thead>
        <tbody className="bg-0c0c0c font-league font-normal">
            {
                data.map((item) => (
                    <tr key={item.login.id}>
                        <td className="border border-323232 w-56">{item.location.city}</td>
                        <td className="border border-323232 w-56">{item.location.state}</td>
                        <td className="border border-323232 w-40">{item.location.country}</td>
                        <td className="border border-323232 w-28">{item.location.postcode}</td>
                        <td className="border border-323232 w-28">{item.location.street.number}</td>
                        <td className="border border-323232">{item.name.first} {item.name.last}</td>
                        <td className="border border-323232 w-32">{item.location.coordinates.latitude}</td>
                        <td className="border border-323232 w-32">{item.location.coordinates.longitude}</td>
                    </tr>
                ))
            }
        </tbody >
    </table >
);

