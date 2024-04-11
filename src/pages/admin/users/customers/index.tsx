import CustomLoader from '@/components/core/CustomLoader';
import useMutation from '@/hooks/useMutation';
import useSwr from '@/hooks/useSwr';
import { AdminLayout } from '@/layouts';
import { MuiTblOptions } from '@/utils';
import MaterialTable from '@material-table/core';
import { Paper, Switch, Tooltip } from '@mui/material';
import moment from 'moment';
import { FaEye } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { toast } from 'react-toastify';

const Customers = () => {
  const { data, isValidating, mutate } = useSwr(`customer`)
  const { mutation, isLoading } = useMutation()

  const UpdateUser = async (item: any) => {
    try {
      const res = await mutation(`customer/update/${item?.id}`, {
        method: "PUT",
        isAlert: true,
        body: {
          isBlocked: item?.status === true ? false : true,
        },
      })
      if (res?.status == 200) {
        mutate()
        toast.info(`Customer ${item?.status === true ? `Active` : `Blocked`} Successfully`)
      } else {
        toast.error(res?.results?.msg)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AdminLayout>
        <div className="px-4 py-4 h-full overflow-y-auto">
          <MaterialTable
            title={
              <>
                <div
                  className={`md:text-lg text-xs font-bold text-primary md:flex  hidden gap-3 items-center }`}
                >
                  <div className=" flex items-center gap-3">
                    <MdGroups2 />
                    <p>All Customers Details</p>
                  </div>

                </div>
              </>
            }
            isLoading={isLoading || isValidating}
            components={{
              Container: (props) => (
                <Paper {...props} className="!shadow-none" />
              ),
              OverlayLoading: () => <CustomLoader />,

            }}

            data={
              data
                ? data?.data?.data?.map((item: any, i: number) => ({
                  ...item,
                  sl: i + 1,
                  id: item?._id,
                  name: item?.name,
                  email: item?.email,
                  mobileNo: item?.mobileNo,
                  image: item?.image,
                  gender: item?.gender,
                  role: item?.role,
                  status: item?.isBlocked,
                  orders: 5,
                  walletBalance: "$10000",
                  timestamp: moment(new Date(item?.createdAt)).format("lll"),

                }))
                : []
            }


            options={{
              ...MuiTblOptions(),
              search: false,
              exportMenu: []

            }}
            columns={[
              {
                title: "#",
                field: "sl",
                editable: "never",
                width: "0%",
              },
              {
                title: "Name",
                tooltip: "User Details",
                field: "name",
                editable: "never",
                width: "30%",
                render: (rowData) => (
                  <div className='flex items-center gap-2'>
                    <img
                      src={rowData.image}
                      alt="userImage"
                      className=" w-16 h-16 rounded-full object-contain" />

                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {rowData.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {rowData.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        {rowData.mobileNo}
                      </p>
                    </div>
                  </div>
                )
              },
              {
                title: "Role",
                tooltip: "role",
                field: "role",
                editable: "never",
                width: "2%",
                render: (rowData) => (

                  <p className="text-sm font-semibold text-gray-900 capitalize">
                    {rowData.role}
                  </p>

                )
              },
              {
                title: "Wallet Balance",
                tooltip: "Wallet Balance",
                field: "walletBalance",
                editable: "never",
                width: "5%",

              },
              {
                title: "Status",
                tooltip: "status",
                field: "status",
                editable: "never",
                width: "2%",
                render: (item: any) => {
                  return (
                    <>
                      <div className="flex gap-3">
                        <Tooltip
                          title={
                            item?.status !== true ? "ACTIVE" : "BLOCK"
                          }
                        >
                          <Switch
                            checked={!item?.status}
                            onChange={(e) => UpdateUser(item)}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        </Tooltip>
                      </div>
                    </>
                  );
                },
              },
              {
                title: "No Of Orders",
                tooltip: "No Of Orders",
                field: "orders",
                editable: "never",
                width: "5%",

              },


              {
                title: "Action",
                tooltip: "Action",
                field: "action",
                editable: "never",
                width: "2%",
                render: (item) => (
                  <div> <FaEye className=' text-xl text-primary cursor-pointer' /></div>)

              },
            ]}
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default Customers;

