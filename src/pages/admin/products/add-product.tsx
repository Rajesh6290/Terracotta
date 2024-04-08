import { AdminLayout } from "@/layouts";
import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import * as Yup from "yup";
import Button from "@/components/core/Button";
import CustomInputField from "@/components/core/CustomInputField";
import { Formik, Form, Field, FieldProps, FormikProps, FormikHelpers } from "formik";
import useSwr from "@/hooks/useSwr";
import Link from "next/link";
import useMutation from "@/hooks/useMutation";
import { toast } from "react-toastify";
const AddProduct = () => {
    const { mutation, isLoading } = useMutation()
    const [files, setFiles] = useState<File[]>([]);
    const { data, mutate, isValidating } = useSwr("category");
    const Schema = [
        {
            key: "1",
            label: "Product Name",
            name: "name",
            type: "text",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.string().required("Required"),
        },
        {
            key: "2",
            label: "Product Slug",
            name: "slug",
            type: "text",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.string().optional(),
        },
        {
            key: "3",
            label: "Description",
            name: "description",
            type: "text",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.string().required("Required"),
        },
        {
            key: "4",
            label: "Select Category",
            name: "category",
            initialValue: "",
            options: data?.data?.data?.map((item: any) => {
                return {
                    value: item?._id,
                    label: item?.name,
                };
            }),
            validationSchema: Yup.string().required("Required"),
            type: "select",
            className: "col-span-6",
        },


        {
            key: "5",
            label: "Product Image",
            name: "productImages",
            type: "file",
            initialValue: [],
            className: "col-span-12",
            validationSchema: Yup.mixed().required("Required").test("fileType", "Required", (value: any) => {

                return files?.length === 0 ? false : true;
            })
            ,
        },
        {
            key: "6",
            label: "Product Color",
            name: "color",
            type: "text",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.string().required("Required"),
        },
        {
            key: "6",
            label: "Price",
            name: "price",
            type: "number",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.number().required("Required"),
        },
        {
            key: "7",
            label: "Sale Price",
            name: "salePrice",
            type: "number",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.number().required("Required"),
        },
        {
            key: "8",
            label: "Stock",
            name: "stock",
            type: "number",
            initialValue: "",
            className: "col-span-6",
            validationSchema: Yup.number().required("Required"),
        },
    ];

    const initialValues: { [key: string]: string } = Schema.reduce(
        (accumulator: { [key: string]: string }, currentValue: any) => {
            accumulator[currentValue.name] = currentValue.initialValue;
            return accumulator;
        },
        {}
    );

    const validationSchema: { [key: string]: Yup.StringSchema } =
        Schema.reduce(
            (accumulator: { [key: string]: Yup.StringSchema }, currentValue: any) => {
                accumulator[currentValue.name] = currentValue.validationSchema;
                return accumulator;
            },
            {}
        );
    const displayFiles = (selectedFiles: File[]) => {
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const resetFiles = () => {
        setFiles([]);
    };

    const removeFile = (fileToRemove: File, formik: FormikProps<any>) => {
        setFiles((prevFiles) => {
            const newFiles = prevFiles.filter((file) => file !== fileToRemove);
            // Set the "image" field as touched to trigger validation
            formik.setFieldTouched('image', true);
            return newFiles;
        });
    };


    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.currentTarget.classList.remove("border-indigo-600");
        const droppedFiles = e.dataTransfer.files;
        displayFiles(Array.from(droppedFiles));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, formik: FormikProps<any>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFiles = Array.from(e.target.files);
            displayFiles(selectedFiles);

            // Reset the error if files are selected
            const formikTouched = { ...formik.touched };
            formikTouched["image"] = false;
            formik.setTouched(formikTouched);
        } else {
            // Set the error if no files are selected
            const formikErrors = { ...formik.errors };
            formikErrors["image"] = "Required";
            formik.setErrors(formikErrors);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.currentTarget.classList.add("border-indigo-600");
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.currentTarget.classList.remove("border-indigo-600");
    };
    const handleOperation = async (values: any, { resetForm }: FormikHelpers<any>) => {
        try {
            const formData = new FormData();
            formData.append("name", values?.name);
            formData.append("slug", "");
            formData.append("description", values?.description);
            formData.append("category", values?.category);
            formData.append("color", values?.color);
            formData.append("price", values?.price);
            formData.append("salePrice", values?.salePrice);
            formData.append("stock", values?.stock);
            files?.map((item, i) => (
                formData.append("productImages", item)
            ))
            const res = await mutation(`product`, {
                method: "POST",
                body: formData,
                isFormData: true,
                isAlert: true,

            })
            if (res?.status === 200) {
                resetForm();
                setFiles([]);
                toast.success(res?.results?.msg)
            } else {
                toast.success(res?.results?.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AdminLayout title="Create Product | Terracotta">
            <div className="px-6 py-3 w-full h-full flex flex-col gap-5">
                <div className="w-full flex items-center  justify-between">
                    <p className="font-semibold tracking-wider text-xl text-gray-700">Add New Product</p>
                    <Link href="/admin/category" className="bg-primary text-white px-5 py-2 text-sm rounded-lg font-semibold">
                        Add Category
                    </Link>
                </div>
                <div className="p-10 shadow-[0px_0px_5px_1px_#00000024] bg-white rounded-lg">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Yup.object(validationSchema)}
                        onSubmit={handleOperation}
                    >
                        {(formik) => (
                            <Form className=" grid grid-cols-12 gap-2 md:gap-4 w-full">
                                {Schema.map((inputItem: any) => (
                                    <Field name={inputItem.name} key={inputItem.key}>
                                        {(props: FieldProps<string>) => (
                                            <div
                                                className={`flex flex-col justify-start gap-2 ${inputItem.className}`}
                                            >
                                                {
                                                    inputItem.type === "file" ?
                                                        <div className=" flex flex-col gap-3">
                                                            <div className="font-semibold text-themeDarkGray">
                                                                {inputItem.label}
                                                            </div>
                                                            <div className=" flex w-full flex-col gap-1">
                                                                <div
                                                                    className={`w-full relative border-2 border-dashed rounded-lg p-6
                            ${formik?.touched[inputItem?.name] &&
                                                                            formik?.errors[inputItem?.name]
                                                                            ? "border-red-500"
                                                                            : "border-gray-300 "
                                                                        }
                            `}
                                                                    onDragOver={handleDragOver}
                                                                    onDragLeave={handleDragLeave}
                                                                    onDrop={handleDrop}
                                                                >
                                                                    <input
                                                                        type="file"
                                                                        className="absolute cursor-pointer inset-0 w-full h-full opacity-0 z-50"
                                                                        onChange={(e) => handleFileChange(e, formik)}
                                                                        multiple
                                                                        accept="" // Accept only CSV files
                                                                    />
                                                                    <div className="text-center">
                                                                        <img
                                                                            className="mx-auto h-12 w-12"
                                                                            src="https://www.svgrepo.com/show/357902/image-upload.svg"
                                                                            alt=""
                                                                        />

                                                                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                                            <label
                                                                                htmlFor="file-upload"
                                                                                className="relative cursor-pointer"
                                                                            >
                                                                                <span>Drag and drop</span>
                                                                                <span className="text-[#E24031]">
                                                                                    {" "}
                                                                                    or browse
                                                                                </span>
                                                                                <span> to upload</span>
                                                                                <input
                                                                                    id="file-upload"
                                                                                    name="file-upload"
                                                                                    type="file"
                                                                                    className="sr-only"
                                                                                    multiple
                                                                                    accept=""
                                                                                />
                                                                            </label>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                {formik?.touched[inputItem?.name] &&
                                                                    formik?.errors[inputItem?.name] && (
                                                                        <div className="text-red-500 text-xs">
                                                                            {formik?.touched[inputItem?.name] &&
                                                                                formik?.errors[inputItem?.name] as any}
                                                                        </div>
                                                                    )}
                                                            </div>
                                                            <div className="  w-full grid grid-cols-5 gap-3 place-content-center">
                                                                {files.map((file, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="text-center py-2 flex flex-col gap-1 "
                                                                    >
                                                                        <div className=" flex flex-col gap-1 items-center">
                                                                            <img
                                                                                src={URL.createObjectURL(file)}
                                                                                alt={file.name}
                                                                                className="w-14 h-14"
                                                                            />
                                                                            <div>
                                                                                {file.name?.length >= 20
                                                                                    ? file.name?.slice(0, 18) + `...`
                                                                                    : file.name}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className=" cursor-pointer bg-red-50 font-medium text-gray-800 py-1 px-2 rounded-lg"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                removeFile(file, formik);
                                                                            }}

                                                                        >
                                                                            Remove
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        :
                                                        <>

                                                            <CustomInputField
                                                                key={inputItem?.key}
                                                                name={inputItem?.name}
                                                                type={inputItem?.type}
                                                                options={inputItem?.options}
                                                                value={formik?.values[inputItem?.name]}
                                                                onChange={(e: any) => {
                                                                    formik.handleChange(e);
                                                                }}
                                                                disabled={inputItem?.disabled}
                                                                onBlur={formik.handleBlur}
                                                                fullWidth
                                                                formik={formik}
                                                                loading={inputItem?.loading}
                                                                error={Boolean(
                                                                    formik?.touched[inputItem?.name] &&
                                                                    formik?.errors[inputItem?.name]
                                                                )}
                                                                helperText={
                                                                    formik?.touched[inputItem?.name] &&
                                                                    (formik?.errors[inputItem?.name] as string)
                                                                }
                                                                label={inputItem.label}
                                                            />
                                                        </>

                                                }
                                            </div>
                                        )}
                                    </Field>
                                ))}
                                <div className="flex w-full items-center col-span-12 justify-center  gap-2 pt-2">
                                    <Button
                                        loading={isLoading}
                                        type="submit"
                                    >
                                        Save Product
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AddProduct;
