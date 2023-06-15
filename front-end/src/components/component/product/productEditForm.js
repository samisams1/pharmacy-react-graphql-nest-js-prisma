import React from 'react';
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { Form, useForm } from '../../ui/useForm';
import Controls from '../../ui/controls';
import Product from './product';
export default function ProductEditForm(props) {
    const {saveProduct} = Product.CreateProduct();
    const {recordForEdit } = props
    console.log(props)
    const initialFValues = {
        id:  props.id,
        name: props.name,
        brand: props.brand,
        category: props.category,
        tag: props.tag,
        image: props.image,
        quantity: props.quantity,
        price: props.price,
        details:props.details
    }
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
         if ('brand' in fieldValues)
            temp.brand = fieldValues.brand ? "" : "This field is required."
      
         if ('category' in fieldValues)
            temp.category = fieldValues.category ? "" : "This field is required."
        if ('tag' in fieldValues)
            temp.tag = fieldValues.tag ? "" : "This field is required."
        if ('image' in fieldValues)
            temp.image = fieldValues.image ? "" : "This field is required."
        if ('quantity' in fieldValues)
            temp.quantity = fieldValues.quantity ? "" : "This field is required."
        if ('price' in fieldValues)
        temp.price = fieldValues.price ? "" : "This field is required."
        if('details' in fieldValues)
        temp.details = fieldValues.details ? "" : "This field is required."
      //  setMessage("")
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
            
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
         handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
        saveProduct(values)
         resetForm();
        }
    }
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, )
return (
    <Form onSubmit={handleSubmit}>
    <Grid container>
        <Grid item xs={6}>
            <Controls.Input
                name="name"
                label=" Name"
                value={values.name}
                onChange={handleInputChange}
                error={errors.name}
            />
           <Controls.Input
                name="brand"
                label="Brand"
                value={values.brand}
                onChange={handleInputChange}
                error={errors.brand}
            />
           
           <Controls.Input
                label="Category"
                name="category"
                value={values.category}
                onChange={handleInputChange}
                 error={errors.category}
            />
              <Controls.Input
                label="Tag"
                name="tag"
                value={values.tag}
                onChange={handleInputChange}
                error={errors.tag}
            />

        </Grid>

        <Grid item xs={6}>
           

            <div>
          
             <Controls.Input
                label="Image"
                name="image"
                value={values.image}
                onChange={handleInputChange}
                 error={errors.image}
            />
          
             <Controls.Input
                label="Quantity"
                name="quantity"
                value={values.quantity}
                onChange={handleInputChange}
                 error={errors.quantity}
            />
            <Controls.Input
                label="Price"
                name="price"
                value={values.price}
                onChange={handleInputChange}
                 error={errors.price}
            />
             <Controls.Input
                label="Detail"
                name="details"
                value={values.details}
                onChange={handleInputChange}
                 error={errors.details}
            />
                <Controls.Button
                    type="submit"
                    text="Submit" />
                <Controls.Button
                    text="Reset"
                    //color="default"
                    onClick={resetForm} />
            </div>
          
        </Grid>
    </Grid>
</Form>
    )
}