import React, { useEffect, useState } from "react";
import CreateAccount from "../../components/screens/admin/account-management/CreateAccount";
import InfoAccount from "../../components/screens/admin/account-management/InfoAccount";
import MainLayout from "../../components/layout/MainLayout";
import { list } from "../../utils/api/user";

function AccountManagement() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getListUser = async () => {
      try {
        const res = await list();
        setListUser(
          res.data
            ?.map((e) => ({ id: e._id, ...e }))
            ?.filter((e) => e.username !== "admin")
        );
      } catch (error) {
        throw error;
      }
    };
    getListUser();
  }, []);
  return (
    <MainLayout>
      <InfoAccount data={listUser} setList={setListUser} />
      <CreateAccount setList={setListUser} />

      </MainLayout>
  );
}

export default AccountManagement;
