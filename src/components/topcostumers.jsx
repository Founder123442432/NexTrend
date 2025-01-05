export default function Topcostumers({ orders }) {
  return (
    <div className="flex flex-wrap gap-10 mt-20  ">
      <div className="w-full">
        <h3 className="text-2xl font-bold py-4 my-7">last Costumers</h3>
        <div className="overflow-x-auto font-[sans-serif] w-full">
          <table className="min-w-full overflow-x-auto bg-white ">
            <thead className="bg-gray-700 whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="p-4 text-left text-sm font-medium text-white">
                  Email
                </th>
                <th className="p-4 text-left text-sm font-medium text-white">
                  phone Number
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap">
              {orders?.slice(0, 5).map((Costumer) => (
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm">
                    {Costumer.firsetname} {Costumer.lastname}
                  </td>
                  <td className="p-4 text-sm"> {Costumer.email} </td>
                  <td className="p-4 text-sm"> {Costumer.phonenumber} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
