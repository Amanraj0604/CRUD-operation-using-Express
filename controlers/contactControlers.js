const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModels");
//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {
    const contact=await Contact.find();
    res.status(200).json(contact);
});

//@desc Create Contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req, res) => {
    console.log("Body data =", req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All feilds are mendotry");
     
    }
    const contact= await Contact.create({
        name,
        email,
        phone,
    }); 


    res.status(201).json(contact );
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact );
});

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact =asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );
    res.status(200).json(updatedContact) ;
});

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact =asyncHandler( async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndRemove(req.params.id); // Corrected this line
    res.status(200).json(contact);
}) ;

module.exports = {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
};
