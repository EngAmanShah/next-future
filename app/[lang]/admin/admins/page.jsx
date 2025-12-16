"use client";
import React, { useContext, use } from "react";
import { Context } from "@/providers/ContextProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useAuth from "@/hooks/UseAuth";

export default function AdminsPage({ params }) {
  const { lang } = use(params);
  const { user } = useAuth();
  const router = useRouter();
  const { admins } = useContext(Context);
  const PRIMARY_ADMIN_UID = "ev1kYZvZq2RQ9AguTpFTsGhSGaD3";

  console.log("Admins in page:", admins);
  console.log("Primary Admin UID:", PRIMARY_ADMIN_UID);
  console.log("Current user UID:", user?.uid);

  const primaryAdmin = admins.find((admin) => admin.id === PRIMARY_ADMIN_UID);

  const filteredAdmins = admins.filter(
    (admin) => admin.id !== PRIMARY_ADMIN_UID
  );

  const sortedAdmins = [...filteredAdmins].sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return a.createdAt.toMillis() - b.createdAt.toMillis();
    }
    if (!a.createdAt) return 1;
    if (!b.createdAt) return -1;
    return 0;
  });

  const content = {
    en: {
      title: "Admins Management",
      add: "Add Sub-Admin",
      removeConfirm: (name) =>
        `Are you sure you want to remove admin "${name}"?`,
      remove: "Remove",
      noAdmins: "No Admins",
      createdAt: "Created At",
      name: "Name",
      email: "Email",
      role: "Role",
      superAdmin: "Super Admin",
      subAdmin: "Sub Admin",
      removedSuccess: "Admin removed successfully",
      removedError: "Failed to remove admin",
      onlySuperCanRemove: "Only Super Admin can remove sub-admins",
    },
    ar: {
      title: "إدارة المسؤولين",
      add: "إضافة مسؤول فرعي",
      removeConfirm: (name) => `هل أنت متأكد أنك تريد إزالة المسؤول "${name}"؟`,
      remove: "إزالة",
      noAdmins: "لا يوجد مسؤولون",
      createdAt: "تاريخ الإنشاء",
      name: "الاسم",
      email: "البريد الإلكتروني",
      role: "الدور",
      superAdmin: "مسؤول رئيسي",
      subAdmin: "مسؤول فرعي",
      removedSuccess: "تمت إزالة المسؤول بنجاح",
      removedError: "فشل في إزالة المسؤول",
      onlySuperCanRemove: "فقط المسؤول الرئيسي يمكنه إزالة المسؤولين الفرعيين",
    },
  };

  const t = content[lang] || content.en;

  const handleRemoveAdmin = async (uid, adminName) => {
    const confirmed = window.confirm(t.removeConfirm(adminName));
    if (!confirmed) return;

    try {
      const res = await fetch("/api/remove-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(t.removedSuccess);
      } else {
        toast.error(data.error || t.removedError);
      }
    } catch (err) {
      console.error(err);
      toast.error(t.removedError);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "18px",
        border: "1px solid rgba(227, 227, 227, 1)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{t.title}</h2>
      </div>

      {admins.length > 0 && primaryAdmin ? (
        <div className="table-responsive">
          <table
            className="table table-striped table-bordered"
            style={{ whiteSpace: "nowrap" }}
          >
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>{t.name}</th>
                <th>{t.email}</th>
                <th>{t.createdAt}</th>
                <th>{t.remove}</th>
              </tr>
            </thead>
            <tbody>
              {/* Don't show super admin to anyone - hide from company */}
              {sortedAdmins.map((admin, index) => {
                return (
                  <tr key={admin.id}>
                    <td>{index + 1}</td>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>
                      {admin.createdAt
                        ? admin.createdAt.toDate().toLocaleString()
                        : "—"}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleRemoveAdmin(admin.id, admin.name)
                        }
                      >
                        {t.remove}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center my-5">{t.noAdmins}</h2>
      )}
    </div>
  );
}
