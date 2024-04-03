import { AdminLayout } from '@/layouts';
import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Switch, Avatar, Paper, Tooltip } from '@mui/material';
import { BiSolidSend } from 'react-icons/bi';
import { MuiTblOptions } from '@/utils';
import { MdGroups2 } from 'react-icons/md';
import useSwr from '@/hooks/useSwr';
import moment from 'moment';

const Customers = () => {
  const { data, isValidating } = useSwr(`customer`)
  console.log("all data=======>", data)

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
            // isLoading={isLoading || isValidating}
            components={{
              Container: (props) => (
                <Paper {...props} className="!shadow-none" />
              ),

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
                width: "1%",
              },

              {
                title: "Image",
                tooltip: "Profile Pic",
                field: "image",
                editable: "never",
                width: "5%",
                render: (rowData: any) => (
                  <img
                    src={rowData.image}
                    alt="userImage"
                    className=" w-16 h-16 rounded-full object-contain" />)

              },

              {
                title: "Name",
                tooltip: "User Details",
                field: "name",
                editable: "never",
                render: (rowData) => (
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
                )
              },
              {
                title: "Gender",
                tooltip: "gender",
                field: "gender",
                editable: "never",
                render: (rowData) => (

                  <p className="text-sm font-semibold text-gray-900 capitalize">
                    {rowData.gender}
                  </p>

                )
              },
              {
                title: "Role",
                tooltip: "role",
                field: "role",
                editable: "never",
                render: (rowData) => (

                  <p className="text-sm font-semibold text-gray-900 capitalize">
                    {rowData.role}
                  </p>

                )
              },
              {
                title: "Status",
                tooltip: "status",
                field: "status",
                editable: "never",
                render: (item: any) => {
                  return (
                    <>
                      <div className="flex gap-3">
                        <Tooltip
                          title={
                            item?.status === true ? "ACTIVE" : "BLOCK"
                          }
                        >
                          <Switch
                            checked={item?.status}
                            // onChange={(e) => handleAppChange(item)}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        </Tooltip>
                      </div>
                    </>
                  );
                },
              },
              {
                title: "Created At",
                tooltip: "Created At",
                field: "timestamp",
                editable: "never",
                width: "20%",
              },



              {
                title: "Action",
                tooltip: "Action",
                field: "action",
                editable: "never",
                width: "10%",

              },
            ]}
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default Customers;

