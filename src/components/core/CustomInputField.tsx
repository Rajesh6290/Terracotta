/* eslint-disable @next/next/no-img-element */

/**
 * Supported and usable input types:
 *
 * - text
 * - email
 * - phone
 * - password
 * - custom-view-password
 * - slider
 * - radio
 * - checkbox
 * - radio-group
 * - checkbox-group
 * - select
 * - multi-select
 * - multiple-autocomplete
 * - autocomplete
 * - multi-autocomplete
 * - country-selector
 *
 * Please ensure to use these types appropriately when configuring the component.
 */

/****
 * IMPORTANT: Please comply to the following rules to ensure proper functionality of this component:
 *
 * 1. If you have utilized components such as checkbox, radio, checkbox-group, radio-group, slider, range-slider,
 *    multi-select, autocomplete, or country-selector, it is mandatory to pass the 'formik'
 *    prop to this component.
 *
 * 2. You can customize the color of certain types. Ensure that only hexadecimal color codes are used for customization.
 *
 * 3. Additionally, customize different fields using the 'InputProps' property.
 *
 * Note: Failure to comply with these guidelines may result in unexpected behavior.
 *
 * Created by Rudra
 ****/

"use client";
import {
    Autocomplete,
    Box,
    Checkbox,
    Chip,
    CircularProgress,
    Dialog,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputAdornment,
    InputLabel,
    InputProps,
    MenuItem,
    Radio,
    Select,
    Slider,
    TextField,
    Tooltip,
} from "@mui/material";
import { FormikProps } from "formik";
import React, {
    ChangeEvent,
    Dispatch,
    FocusEvent,
    HTMLInputTypeAttribute,
    SetStateAction,
    useState,
} from "react";
import { FaEye } from "react-icons/fa6";
import { MdNotInterested, MdVisibility, MdVisibilityOff } from "react-icons/md";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface Props {
    type?: HTMLInputTypeAttribute;
    value?: string | number | string[] | File;
    onChange?: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
    error?: boolean;
    key?: string | number;
    helperText?: string | false;
    fullWidth?: boolean;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    options?: { label: string | number; value: string | number | any }[];
    id?: string | number;
    variant?: "filled" | "outlined" | "standard";
    InputProps?: InputProps;
    multiline?: boolean;
    rows?: number;
    defaultValue?: string | number | [] | object;
    label?: string;
    size?: "small" | "medium";
    formik?: FormikProps<{
        [key: string]: string;
    }>;
    labelPlacement?: "bottom" | "top" | "start" | "end" | undefined;
    checkedIcon?: React.ReactNode;
    checkboxIcon?: React.ReactNode;
    marks?: boolean | { value: number; label: number }[];
    step?: number;
    valueLabelDisplay?: "auto" | "on" | "off";
    orientation?: "horizontal" | "vertical";
    min?: number;
    max?: number;
    loading?: boolean;
    fileSize?: number;
    setAutoCompleteValue?: Dispatch<SetStateAction<string>>;
    fileAccept?: string;
    allOnChange?: any;
}

const CustomInputField = ({
    type = "text",
    value,
    label,
    onChange,
    onBlur,
    error,
    helperText,
    fullWidth,
    placeholder,
    name,
    disabled,
    InputProps,
    id,
    variant,
    options,
    rows,
    multiline,
    defaultValue,
    size,
    formik,
    labelPlacement,
    checkedIcon,
    checkboxIcon,
    marks,
    step,
    valueLabelDisplay = "on",
    orientation = "horizontal",
    min = 0,
    max = 100,
    loading,
    fileSize = 200, //accepts 200kb in size,
    setAutoCompleteValue,
    fileAccept,
    allOnChange,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    switch (type) {
        case "text":
        case "email":
            return (
                <TextField
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    name={name}
                    size={size}
                    id={String(id)}
                    type={type}
                    disabled={disabled}
                    variant={variant}
                    InputProps={InputProps}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    helperText={helperText}
                    defaultValue={defaultValue}
                />
            );
        case "textarea":
            return (
                <TextField
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    name={name}
                    size={size}
                    id={String(id)}
                    type={"text"}
                    disabled={disabled}
                    variant={variant}
                    rows={rows}
                    multiline={multiline}
                    InputProps={InputProps}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    helperText={helperText}
                    defaultValue={defaultValue}
                />
            );
        case "number":
            return (
                <TextField
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    name={name}
                    size={size}
                    id={String(id)}
                    type={"text"}
                    disabled={disabled}
                    variant={variant}
                    value={value}
                    onChange={onChange}
                    onKeyDown={(e) => {
                        if (
                            !/^[0-9]$/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight" &&
                            !(e.key === "a" && (e.ctrlKey || e.metaKey)) &&
                            !(e.key === "x" && (e.ctrlKey || e.metaKey))
                        )
                            e.preventDefault();
                    }}
                    onBlur={onBlur}
                    inputMode="numeric"
                    error={error}
                    helperText={helperText}
                    defaultValue={defaultValue}
                />
            );
        case "password":
            return (
                <TextField
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    name={name}
                    size={size}
                    id={String(id)}
                    type={showPassword ? "text" : type}
                    disabled={disabled}
                    variant={variant}
                    InputProps={{
                        ...InputProps,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <MdVisibility className="!text-text-primary text-xl" />
                                    ) : (
                                        <MdVisibilityOff className="!text-text-primary text-xl" />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    multiline={multiline}
                    rows={rows}
                    helperText={helperText}
                    defaultValue={defaultValue}
                />
            );
        case "custom-view-password":
            return (
                <div>
                    <TextField
                        fullWidth={fullWidth}
                        placeholder={placeholder}
                        name={name}
                        size={size}
                        id={String(id)}
                        type={showPassword ? "text" : "password"}
                        disabled={disabled}
                        variant={variant}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={error}
                        multiline={multiline}
                        rows={rows}
                        helperText={helperText}
                        defaultValue={defaultValue}
                    />

                    <div>
                        <FormControlLabel
                            checked={showPassword}
                            onClick={() => setShowPassword(!showPassword)}
                            control={<Checkbox />}
                            label="show password"
                        />
                    </div>
                </div>
            );
        case "file-no-preview":
            return (
                <>
                    <TextField
                        id={String(id)}
                        fullWidth={fullWidth}
                        placeholder={placeholder}
                        name={name}
                        size={size}
                        type="file"
                        disabled={disabled}
                        variant={variant}
                        InputProps={{
                            ...InputProps,
                        }}
                        onChange={(e) => {
                            let event: ChangeEvent<HTMLInputElement> = e as any;
                            let file = event?.target?.files && event?.target?.files[0];
                            if (fileSize && file && file?.size / 1000 > fileSize && formik)
                                formik?.setFieldError(
                                    name!,
                                    `Please select a file under size ${fileSize}`
                                );
                            formik && formik.setFieldValue(name!, file);
                        }}
                        onBlur={onBlur}
                        error={error}
                        helperText={helperText}
                        defaultValue={defaultValue}
                    />
                </>
            );
        case "multiple-file":
            return (
                <>
                    <TextField
                        id={String(id)}
                        fullWidth={fullWidth}
                        placeholder={placeholder}
                        name={name}
                        size={size}
                        type="file"
                        disabled={disabled}
                        variant={variant}
                        onChange={(e) => {
                            let event: ChangeEvent<HTMLInputElement> = e as any;
                            let files = event?.target?.files;

                            if (fileSize && files && files.length > 0) {
                                const totalSize = Array.from(files).reduce(
                                    (acc, file) => acc + file.size,
                                    0
                                );

                                if (totalSize / 1000 > fileSize && formik)
                                    formik?.setFieldError(
                                        name!,
                                        `Please select file(s) under total size ${fileSize}`
                                    );
                            }

                            formik && formik.setFieldValue(name!, files);
                        }}
                        onBlur={onBlur}
                        error={error}
                        helperText={helperText}
                        defaultValue={defaultValue}
                        inputProps={{ accept: fileAccept, multiple: true }} // Set multiple directly on inputProps
                    />
                </>
            );
        case "file-with-preview":
            return (
                <>
                    <TextField
                        id={String(id)}
                        fullWidth={fullWidth}
                        placeholder={placeholder}
                        name={name}
                        size={size}
                        type="file"
                        disabled={disabled}
                        variant={variant}
                        InputProps={{
                            ...InputProps,
                            inputProps: {
                                accept: "image/*,video/*",
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    {formik?.values?.[name!] ? (
                                        <IconButton onClick={() => setOpen(true)}>
                                            <Tooltip title="View File">
                                                <FaEye className="!text-red-600 text-xl" />
                                            </Tooltip>
                                        </IconButton>
                                    ) : null}
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => {
                            let event: ChangeEvent<HTMLInputElement> = e as any;
                            let file = event?.target?.files && event?.target?.files[0];
                            if (fileSize && file && file?.size / 1000 > fileSize && formik)
                                formik?.setFieldError(
                                    name!,
                                    `Please select a file under size ${fileSize}`
                                );
                            formik && formik.setFieldValue(name!, file);
                        }}
                        onBlur={onBlur}
                        error={error}
                        helperText={helperText}
                        defaultValue={defaultValue}
                    />
                    <FilePreview
                        open={open}
                        onClose={() => setOpen(false)}
                        fileValue={value as File}
                    />
                </>
            );
        case "checkbox":
            return (
                <FormControlLabel
                    labelPlacement={labelPlacement}
                    value={value}
                    onChange={(e, newValue) => {
                        formik && formik.setFieldValue(name!, newValue);
                    }}
                    control={
                        <Checkbox
                            checked={Boolean(value)}
                            size={size}
                            checkedIcon={checkedIcon} // pass the desire icon after click
                            icon={checkboxIcon} // pass the desire icon before click
                            sx={{
                                color: "#005da6", // your primary color
                                "&.Mui-checked": {
                                    color: "#444791", // your primary dark color
                                },
                            }}
                        />
                    }
                    label={label}
                />
            );

        case "checkbox-group":
            return (
                <FormGroup>
                    {options &&
                        options?.map((curOpt, i) => (
                            <FormControlLabel
                                key={i}
                                labelPlacement={labelPlacement}
                                value={curOpt.value}
                                onChange={(e) => {
                                    formik &&
                                        formik.setFieldValue(name!, (e.target as any).value);
                                }}
                                control={
                                    <Checkbox
                                        checked={value === curOpt?.value}
                                        size={size}
                                        checkedIcon={checkedIcon} // pass the desire icon after click
                                        icon={checkboxIcon} // pass the desire icon before click
                                        sx={{
                                            color: "#005da6", // your primary color
                                            "&.Mui-checked": {
                                                color: "#444791", // your primary dark color
                                            },
                                        }}
                                    />
                                }
                                label={curOpt.label}
                            />
                        ))}
                </FormGroup>
            );
        case "radio":
            return (
                <FormControlLabel
                    onChange={(e, newValue) => {
                        formik && formik.setFieldValue(name!, newValue);
                    }}
                    value={value}
                    control={
                        <Radio
                            size={size}
                            sx={{
                                color: "#005da6", // your primary color
                                "&.Mui-checked": {
                                    color: "#444791", // your primary dark color
                                },
                            }}
                        />
                    }
                    label={label}
                />
            );
        case "radio-group":
            return (
                <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                    {options &&
                        options?.map((curOpt, i) => (
                            <FormControlLabel
                                key={i}
                                labelPlacement={labelPlacement}
                                value={curOpt.value}
                                onChange={(e) => {
                                    formik &&
                                        formik.setFieldValue(name!, (e.target as any).value);
                                }}
                                control={
                                    <Radio
                                        checked={value === curOpt?.value}
                                        size={size}
                                        checkedIcon={checkedIcon} // pass the desire icon after click
                                        icon={checkboxIcon} // pass the desire icon before click
                                        sx={{
                                            color: "#005da6", // your primary color
                                            "&.Mui-checked": {
                                                color: "#444791", // your primary dark color
                                            },
                                        }}
                                    />
                                }
                                label={curOpt.label}
                            />
                        ))}
                </FormGroup>
            );
        case "slider":
            return (
                <Slider
                    sx={{
                        color: "#005da6", // your primary color
                    }}
                    orientation={orientation}
                    getAriaLabel={() => "Temperature range"}
                    onChange={(e, newValue) => {
                        formik && formik.setFieldValue(name!, newValue);
                    }}
                    valueLabelDisplay={valueLabelDisplay}
                    step={step}
                    size={size}
                    marks={marks}
                    min={min}
                    max={max}
                />
            );
        case "select":
            return (
                <FormControl fullWidth>
                    <TextField
                        fullWidth={fullWidth}
                        id={String(id)}
                        size={size}
                        select={true}
                        name={name}
                        value={value}
                        variant={variant}
                        onChange={onChange}
                        disabled={disabled}
                        label={label}
                        InputProps={InputProps}
                        error={error}
                        helperText={helperText}
                        defaultValue={defaultValue}
                    >
                        {options?.map((option) => (
                            <MenuItem key={option?.value} value={option?.value}>
                                {option?.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            );
        case "multi-select":
            return (
                <FormControl fullWidth>
                    {label && label?.length > 0 && <InputLabel>{label}</InputLabel>}
                    <Select
                        variant={variant}
                        multiple
                        value={(value as string[]) || []}
                        onChange={(e) => {
                            const value = e?.target?.value as string[];
                            formik && formik.setFieldValue(name!, [...value]);
                        }}
                        renderValue={(selected: string[]) => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {options?.map((option, i) => (
                            <MenuItem key={i} value={option?.value}>
                                {option?.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && <div className="text-xs text-red-500">{helperText}</div>}
                </FormControl>
            );
        case "autocomplete":
            return (
                <div className="w-full">
                    <Autocomplete
                        id={String(id)}
                        loading={loading}
                        // disableClearable
                        disablePortal
                        autoHighlight
                        disabled={disabled}
                        key={id}
                        options={options ? options?.map((option) => option) : []}
                        value={options?.find((data) => data?.value === value)?.label as any}
                        onChange={(event, newValue) => {
                            allOnChange?.(newValue);
                            if (newValue?.value) {
                                formik && formik.setFieldValue(name!, newValue?.value);
                                setAutoCompleteValue && setAutoCompleteValue(newValue?.value);
                            } else {
                                formik && formik.setFieldValue(name!, "");
                                setAutoCompleteValue && setAutoCompleteValue("");
                            }
                        }}
                        noOptionsText={
                            <div className="flex items-center gap-1">No Result Found</div>
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                value={value}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? (
                                                <CircularProgress color="inherit" size={20} />
                                            ) : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                                fullWidth={fullWidth}
                                placeholder={placeholder}
                                name={name}
                                variant={variant}
                                id={String(id)}
                                onBlur={onBlur}
                                error={error}
                                helperText={helperText}
                            />
                        )}
                    />
                </div>
            );
        case "multi-autocomplete":
            return (
                <Autocomplete
                    id={String(id)}
                    loading={loading}
                    multiple
                    disabled={disabled}
                    options={options!?.map((option) => option)}
                    value={
                        options && value && (value as any[])?.length > 0
                            ? (options?.filter((curOpt) =>
                                (value as any)?.some(
                                    (curValue: any) => curValue?.value === curOpt.value
                                )
                            ) as any)
                            : []
                    }
                    onChange={(event, newValue) => {
                        if (newValue) formik && formik.setFieldValue(name!, newValue);
                        else formik && formik.setFieldValue(name!, "");
                    }}
                    noOptionsText={
                        <div className="flex items-center gap-1">No Result Found</div>
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            value={value}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                            fullWidth={fullWidth}
                            placeholder={placeholder}
                            name={name}
                            variant={variant}
                            id={String(id)}
                            onBlur={onBlur}
                            error={error}
                            helperText={helperText}
                        />
                    )}
                />
            );
        case "country-selector":
            return (
                <Autocomplete
                    size={size}
                    id={String(id)}
                    options={COUNTRIES}
                    autoHighlight
                    onChange={(event, newValue) => {
                        formik && formik.setFieldValue(name!, newValue?.phone);
                    }}
                    noOptionsText={
                        <div className="flex items-center gap-1">
                            <MdNotInterested className="text-xl" />
                            No Country Found
                        </div>
                    }
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <React.Fragment key={option.label}>
                            <Box
                                component="li"
                                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                {...props}
                            >
                                <img
                                    loading="lazy"
                                    width="10"
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                {option.label}
                            </Box>
                        </React.Fragment>
                    )}
                    renderInput={(params) => (
                        <TextField
                            variant={variant}
                            {...params}
                            placeholder={placeholder}
                            InputProps={{
                                ...InputProps,
                                ...params.InputProps,
                                startAdornment: (
                                    <img
                                        src={`https://flagcdn.com/w20/${(
                                            value as string
                                        )?.toLowerCase()}.png`}
                                        alt=""
                                    />
                                ),
                            }}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                            }}
                        />
                    )}
                />
            );
        default:
            return (
                <TextField
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    name={name}
                    disabled={disabled}
                    size={size}
                    type={type}
                    id={String(id)}
                    variant={variant}
                    InputProps={InputProps}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    helperText={helperText}
                    defaultValue={defaultValue}
                />
            );
    }
};

export default CustomInputField;

const FilePreview = ({
    open,
    onClose,
    fileValue,
}: {
    open: boolean;
    onClose: () => void;
    fileValue?: File;
}) => {
    const fileType = fileValue?.name?.split(".")[1];
    const filePreviewData = () => {
        switch (fileType) {
            case "jpg":
            case "png":
            case "jpeg":
            case "svg":
            case "webp":
                return (
                    <img
                        src={fileValue ? URL?.createObjectURL(fileValue) : ""}
                        className="w-full object-cover h-80"
                        alt="image"
                    />
                );

            case "xlsx":
                return (
                    <iframe
                        src={fileValue ? URL?.createObjectURL(fileValue) : ""}
                        height="200"
                    ></iframe>
                );
        }
    };
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <div className="p-5">
                {fileValue ? (
                    <div className="relative flex flex-col gap-3 md:gap-5 w-full">
                        {filePreviewData()}
                        <button
                            onClick={onClose}
                            type="button"
                            className="px-3 py-2 bg-primary text-white rounded-md"
                        >
                            Close
                        </button>
                    </div>
                ) : null}
            </div>
        </Dialog>
    );
};

export const COUNTRIES = [
    { code: "AD", label: "Andorra", phone: "376" },
    { code: "AE", label: "United Arab Emirates", phone: "971" },
    { code: "AF", label: "Afghanistan", phone: "93" },
    { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
    { code: "AO", label: "Angola", phone: "244" },
    { code: "AQ", label: "Antarctica", phone: "672" },
    { code: "AR", label: "Argentina", phone: "54" },
    { code: "AS", label: "American Samoa", phone: "1-684" },
    { code: "AT", label: "Austria", phone: "43" },
    { code: "AU", label: "Australia", phone: "61", suggested: true },
    { code: "AW", label: "Aruba", phone: "297" },
    { code: "AX", label: "Alland Islands", phone: "358" },
    { code: "AZ", label: "Azerbaijan", phone: "994" },
    { code: "BA", label: "Bosnia and Herzegovina", phone: "387" },
    { code: "BB", label: "Barbados", phone: "1-246" },
    { code: "BD", label: "Bangladesh", phone: "880" },
    { code: "BE", label: "Belgium", phone: "32" },
    { code: "BF", label: "Burkina Faso", phone: "226" },
    { code: "BG", label: "Bulgaria", phone: "359" },
    { code: "BH", label: "Bahrain", phone: "973" },
    { code: "BI", label: "Burundi", phone: "257" },
    { code: "BJ", label: "Benin", phone: "229" },
    { code: "BL", label: "Saint Barthelemy", phone: "590" },
    { code: "BM", label: "Bermuda", phone: "1-441" },
    { code: "BN", label: "Brunei Darussalam", phone: "673" },
    { code: "BO", label: "Bolivia", phone: "591" },
    { code: "BR", label: "Brazil", phone: "55" },
    { code: "BS", label: "Bahamas", phone: "1-242" },
    { code: "BT", label: "Bhutan", phone: "975" },
    { code: "BV", label: "Bouvet Island", phone: "47" },
    { code: "BW", label: "Botswana", phone: "267" },
    { code: "BY", label: "Belarus", phone: "375" },
    { code: "BZ", label: "Belize", phone: "501" },
    { code: "CA", label: "Canada", phone: "1", suggested: true },
    { code: "CC", label: "Cocos (Keeling) Islands", phone: "61" },
    { code: "CD", label: "Congo, Democratic Republic of the", phone: "243" },
    { code: "CF", label: "Central African Republic", phone: "236" },
    { code: "CG", label: "Congo, Republic of the", phone: "242" },
    { code: "CH", label: "Switzerland", phone: "41" },
    { code: "CI", label: "Cote d'Ivoire", phone: "225" },
    { code: "CK", label: "Cook Islands", phone: "682" },
    { code: "CL", label: "Chile", phone: "56" },
    { code: "CM", label: "Cameroon", phone: "237" },
    { code: "CN", label: "China", phone: "86" },
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "CR", label: "Costa Rica", phone: "506" },
    { code: "CU", label: "Cuba", phone: "53" },
    { code: "CV", label: "Cape Verde", phone: "238" },
    { code: "CW", label: "Curacao", phone: "599" },
    { code: "CX", label: "Christmas Island", phone: "61" },
    { code: "CY", label: "Cyprus", phone: "357" },
    { code: "CZ", label: "Czech Republic", phone: "420" },
    { code: "DE", label: "Germany", phone: "49", suggested: true },
    { code: "DJ", label: "Djibouti", phone: "253" },
    { code: "DK", label: "Denmark", phone: "45" },
    { code: "DM", label: "Dominica", phone: "1-767" },
    { code: "DO", label: "Dominican Republic", phone: "1-809" },
    { code: "DZ", label: "Algeria", phone: "213" },
    { code: "EC", label: "Ecuador", phone: "593" },
    { code: "EE", label: "Estonia", phone: "372" },
    { code: "EG", label: "Egypt", phone: "20" },
    { code: "EH", label: "Western Sahara", phone: "212" },
    { code: "ER", label: "Eritrea", phone: "291" },
    { code: "ES", label: "Spain", phone: "34" },
    { code: "ET", label: "Ethiopia", phone: "251" },
    { code: "FI", label: "Finland", phone: "358" },
    { code: "FJ", label: "Fiji", phone: "679" },
    { code: "FK", label: "Falkland Islands (Malvinas)", phone: "500" },
    { code: "FM", label: "Micronesia, Federated States of", phone: "691" },
    { code: "FO", label: "Faroe Islands", phone: "298" },
    { code: "FR", label: "France", phone: "33", suggested: true },
    { code: "GA", label: "Gabon", phone: "241" },
    { code: "GB", label: "United Kingdom", phone: "44" },
    { code: "GD", label: "Grenada", phone: "1-473" },
    { code: "GE", label: "Georgia", phone: "995" },
    { code: "GF", label: "French Guiana", phone: "594" },
    { code: "GG", label: "Guernsey", phone: "44" },
    { code: "GH", label: "Ghana", phone: "233" },
    { code: "GI", label: "Gibraltar", phone: "350" },
    { code: "GL", label: "Greenland", phone: "299" },
    { code: "GM", label: "Gambia", phone: "220" },
    { code: "GN", label: "Guinea", phone: "224" },
    { code: "GP", label: "Guadeloupe", phone: "590" },
    { code: "GQ", label: "Equatorial Guinea", phone: "240" },
    { code: "GR", label: "Greece", phone: "30" },
    {
        code: "GS",
        label: "South Georgia and the South Sandwich Islands",
        phone: "500",
    },
    { code: "GT", label: "Guatemala", phone: "502" },
    { code: "GU", label: "Guam", phone: "1-671" },
    { code: "GW", label: "Guinea-Bissau", phone: "245" },
    { code: "GY", label: "Guyana", phone: "592" },
    { code: "HK", label: "Hong Kong", phone: "852" },
    { code: "HM", label: "Heard Island and McDonald Islands", phone: "672" },
    { code: "HN", label: "Honduras", phone: "504" },
    { code: "HR", label: "Croatia", phone: "385" },
    { code: "HT", label: "Haiti", phone: "509" },
    { code: "HU", label: "Hungary", phone: "36" },
    { code: "ID", label: "Indonesia", phone: "62" },
    { code: "IE", label: "Ireland", phone: "353" },
    { code: "IL", label: "Israel", phone: "972" },
    { code: "IM", label: "Isle of Man", phone: "44" },
    { code: "IN", label: "India", phone: "91" },
    { code: "IO", label: "British Indian Ocean Territory", phone: "246" },
    { code: "IQ", label: "Iraq", phone: "964" },
    { code: "IR", label: "Iran, Islamic Republic of", phone: "98" },
    { code: "IS", label: "Iceland", phone: "354" },
    { code: "IT", label: "Italy", phone: "39" },
    { code: "JE", label: "Jersey", phone: "44" },
    { code: "JM", label: "Jamaica", phone: "1-876" },
    { code: "JO", label: "Jordan", phone: "962" },
    { code: "JP", label: "Japan", phone: "81", suggested: true },
    { code: "KE", label: "Kenya", phone: "254" },
    { code: "KG", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", label: "Cambodia", phone: "855" },
    { code: "KI", label: "Kiribati", phone: "686" },
    { code: "KM", label: "Comoros", phone: "269" },
    { code: "KN", label: "Saint Kitts and Nevis", phone: "1-869" },
    { code: "KP", label: "Korea, Democratic People's Republic of", phone: "850" },
    { code: "KR", label: "Korea, Republic of", phone: "82" },
    { code: "KW", label: "Kuwait", phone: "965" },
    { code: "KY", label: "Cayman Islands", phone: "1-345" },
    { code: "KZ", label: "Kazakhstan", phone: "7" },
    { code: "LA", label: "Lao People's Democratic Republic", phone: "856" },
    { code: "LB", label: "Lebanon", phone: "961" },
    { code: "LC", label: "Saint Lucia", phone: "1-758" },
    { code: "LI", label: "Liechtenstein", phone: "423" },
    { code: "LK", label: "Sri Lanka", phone: "94" },
    { code: "LR", label: "Liberia", phone: "231" },
    { code: "LS", label: "Lesotho", phone: "266" },
    { code: "LT", label: "Lithuania", phone: "370" },
    { code: "LU", label: "Luxembourg", phone: "352" },
    { code: "LV", label: "Latvia", phone: "371" },
    { code: "LY", label: "Libya", phone: "218" },
    { code: "MA", label: "Morocco", phone: "212" },
    { code: "MC", label: "Monaco", phone: "377" },
    { code: "MD", label: "Moldova, Republic of", phone: "373" },
    { code: "ME", label: "Montenegro", phone: "382" },
    { code: "MF", label: "Saint Martin (French part)", phone: "590" },
    { code: "MG", label: "Madagascar", phone: "261" },
    { code: "MH", label: "Marshall Islands", phone: "692" },
    {
        code: "MK",
        label: "Macedonia, the Former Yugoslav Republic of",
        phone: "389",
    },
    { code: "ML", label: "Mali", phone: "223" },
    { code: "MM", label: "Myanmar", phone: "95" },
    { code: "MN", label: "Mongolia", phone: "976" },
    { code: "MO", label: "Macao", phone: "853" },
    { code: "MP", label: "Northern Mariana Islands", phone: "1-670" },
    { code: "MQ", label: "Martinique", phone: "596" },
    { code: "MR", label: "Mauritania", phone: "222" },
    { code: "MS", label: "Montserrat", phone: "1-664" },
    { code: "MT", label: "Malta", phone: "356" },
    { code: "MU", label: "Mauritius", phone: "230" },
    { code: "MV", label: "Maldives", phone: "960" },
    { code: "MW", label: "Malawi", phone: "265" },
    { code: "MX", label: "Mexico", phone: "52" },
    { code: "MY", label: "Malaysia", phone: "60" },
    { code: "MZ", label: "Mozambique", phone: "258" },
    { code: "NA", label: "Namibia", phone: "264" },
    { code: "NC", label: "New Caledonia", phone: "687" },
    { code: "NE", label: "Niger", phone: "227" },
    { code: "NF", label: "Norfolk Island", phone: "672" },
    { code: "NG", label: "Nigeria", phone: "234" },
    { code: "NI", label: "Nicaragua", phone: "505" },
    { code: "NL", label: "Netherlands", phone: "31" },
    { code: "NO", label: "Norway", phone: "47" },
    { code: "NP", label: "Nepal", phone: "977" },
    { code: "NR", label: "Nauru", phone: "674" },
    { code: "NU", label: "Niue", phone: "683" },
    { code: "NZ", label: "New Zealand", phone: "64" },
    { code: "OM", label: "Oman", phone: "968" },
    { code: "PA", label: "Panama", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
    { code: "PF", label: "French Polynesia", phone: "689" },
    { code: "PG", label: "Papua New Guinea", phone: "675" },
    { code: "PH", label: "Philippines", phone: "63" },
    { code: "PK", label: "Pakistan", phone: "92" },
    { code: "PL", label: "Poland", phone: "48" },
    { code: "PM", label: "Saint Pierre and Miquelon", phone: "508" },
    { code: "PN", label: "Pitcairn", phone: "870" },
    { code: "PR", label: "Puerto Rico", phone: "1" },
    { code: "PS", label: "Palestine, State of", phone: "970" },
    { code: "PT", label: "Portugal", phone: "351" },
    { code: "PW", label: "Palau", phone: "680" },
    { code: "PY", label: "Paraguay", phone: "595" },
    { code: "QA", label: "Qatar", phone: "974" },
    { code: "RE", label: "Reunion", phone: "262" },
    { code: "RO", label: "Romania", phone: "40" },
    { code: "RS", label: "Serbia", phone: "381" },
    { code: "RU", label: "Russia", phone: "7" },
    { code: "RW", label: "Rwanda", phone: "250" },
    { code: "SA", label: "Saudi Arabia", phone: "966" },
    { code: "SB", label: "Solomon Islands", phone: "677" },
    { code: "SC", label: "Seychelles", phone: "248" },
    { code: "SD", label: "Sudan", phone: "249" },
    { code: "SE", label: "Sweden", phone: "46" },
    { code: "SG", label: "Singapore", phone: "65" },
    { code: "SH", label: "Saint Helena", phone: "290" },
    { code: "SI", label: "Slovenia", phone: "386" },
    { code: "SJ", label: "Svalbard and Jan Mayen", phone: "47" },
    { code: "SK", label: "Slovakia", phone: "421" },
    { code: "SL", label: "Sierra Leone", phone: "232" },
    { code: "SM", label: "San Marino", phone: "378" },
    { code: "SN", label: "Senegal", phone: "221" },
    { code: "SO", label: "Somalia", phone: "252" },
    { code: "SR", label: "Suriname", phone: "597" },
    { code: "SS", label: "South Sudan", phone: "211" },
    { code: "ST", label: "Sao Tome and Principe", phone: "239" },
    { code: "SV", label: "El Salvador", phone: "503" },
    { code: "SX", label: "Sint Maarten (Dutch part)", phone: "1-721" },
    { code: "SY", label: "Syrian Arab Republic", phone: "963" },
    { code: "SZ", label: "Swaziland", phone: "268" },
    { code: "TC", label: "Turks and Caicos Islands", phone: "1-649" },
    { code: "TD", label: "Chad", phone: "235" },
    { code: "TF", label: "French Southern Territories", phone: "262" },
    { code: "TG", label: "Togo", phone: "228" },
    { code: "TH", label: "Thailand", phone: "66" },
    { code: "TJ", label: "Tajikistan", phone: "992" },
    { code: "TK", label: "Tokelau", phone: "690" },
    { code: "TL", label: "Timor-Leste", phone: "670" },
    { code: "TM", label: "Turkmenistan", phone: "993" },
    { code: "TN", label: "Tunisia", phone: "216" },
    { code: "TO", label: "Tonga", phone: "676" },
    { code: "TR", label: "Turkey", phone: "90" },
    { code: "TT", label: "Trinidad and Tobago", phone: "1-868" },
    { code: "TV", label: "Tuvalu", phone: "688" },
    { code: "TW", label: "Taiwan, Province of China", phone: "886" },
    { code: "TZ", label: "United Republic of Tanzania", phone: "255" },
    { code: "UA", label: "Ukraine", phone: "380" },
    { code: "UG", label: "Uganda", phone: "256" },
    { code: "US", label: "United States", phone: "1", suggested: true },
    { code: "UY", label: "Uruguay", phone: "598" },
    { code: "UZ", label: "Uzbekistan", phone: "998" },
    { code: "VA", label: "Holy See (Vatican City State)", phone: "379" },
    { code: "VC", label: "Saint Vincent and the Grenadines", phone: "1-784" },
    { code: "VE", label: "Venezuela", phone: "58" },
    { code: "VG", label: "British Virgin Islands", phone: "1-284" },
    { code: "VI", label: "US Virgin Islands", phone: "1-340" },
    { code: "VN", label: "Vietnam", phone: "84" },
    { code: "VU", label: "Vanuatu", phone: "678" },
    { code: "WF", label: "Wallis and Futuna", phone: "681" },
    { code: "WS", label: "Samoa", phone: "685" },
    { code: "XK", label: "Kosovo", phone: "383" },
    { code: "YE", label: "Yemen", phone: "967" },
    { code: "YT", label: "Mayotte", phone: "262" },
    { code: "ZA", label: "South Africa", phone: "27" },
    { code: "ZM", label: "Zambia", phone: "260" },
    { code: "ZW", label: "Zimbabwe", phone: "263" },
];