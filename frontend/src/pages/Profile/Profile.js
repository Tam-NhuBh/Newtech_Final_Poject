import React, { useState, useEffect } from 'react';

import PageTitle from '../../components/Typography/PageTitle'
// import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { mockFaculties, mockGenders  } from './components/index'; // Đường dẫn tới file mockData.js
import { Button } from '@windmill/react-ui'
import { useSelector } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';

// import { MailIcon } from '../icons'

function Profile() {
  const user = useSelector((state) => state.auth.user);


  const defaultValue = "Information Technology";

  const { handleSubmit, control, reset } = useForm();

  useEffect(() => {
    reset({
      fullName: user.name || '',
      studentId: '',
      email: user.email || '',
      phoneNumber: '',
      faculty: '',
      class: '',
      major: 'Information Technology',
      academicYear: null,
      dateOfBirth: null,
      gender: '',
      identificationCard: '',
      bank: '',
      address: '',
    });
  }, [user, reset]);
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <PageTitle>Student Information</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-wrap items-center justify-center">
            {/* Hàng đầu tiên */}
            <div className="flex w-full mb-4">
              <Label className="w-1/2 mr-4">
                <span>Full Name</span>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="Full Name"/>
                  )}
                />
              </Label>
          
              {/* Thêm label thứ hai ở đây */}
              <Label className="w-1/2">
                <span>Student ID</span>
                <Controller
                  name="studentId"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="Student Id"/>
                  )}
                />
              </Label>
            </div>
          
            {/* Hàng thứ hai */}
            <div className="flex w-full mb-4">
              <Label className="w-1/2 mr-4">
                <span>Email</span>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder={user.email}/>
                  )}
                />
              </Label>
          
              <Label className="w-1/2">
                <span>Phone Number</span>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="Phone number"/>
                  )}
                />
              </Label>
            </div>                    
          
            {/* Hàng thứ ba */}
            <div className="flex w-full mb-4">
            <Label className="w-1/2 mr-4">
            <span>Faculty</span>
                <Controller
                  name="faculty"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="mt-1"
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      {mockFaculties.map((faculty) => (
                        <option key={faculty.id} value={faculty.id}>
                          {faculty.name}
                        </option>
                      ))}
                    </Select>
                  )}
                />
              </Label>
          
              <Label className="w-1/2">
                <span>Class</span>
                <Controller
                  name="class"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="e.g: 20110CLA3..."/>
                  )}
                />
              </Label>
            </div>
            
            {/* Hàng thứ tư */}
            <div className="flex w-full mb-4">
              <Label className="w-1/2 mr-4">
                <span>Major</span>
                <Controller
                  name="major"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" value={defaultValue}  readOnly/>
                  )}
                />
              </Label>

              <Label className="w-1/2">
              <span>Academic Year</span>
                <div className="relative" style={{ width: "100%" }}>
                  <Controller
                    name="academicYear"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholderText="Select date"
                        // selected={field.value} // Use this if you want to set an initial value
                        onChange={(date) => field.onChange(date)} // Handle date change
                        // Add any other props you need
                      />
                    )}
                  />
                </div>
              </Label>

            </div>

            {/* Hàng 5 */}
            <div className="flex w-full mb-4">
            <Label className="w-1/2">
              <span>Date Of Birth</span>
                <div className="relative" style={{ width: "100%" }}>
                  <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholderText="Select date"
                        // selected={field.value} // Use this if you want to set an initial value
                        onChange={(date) => field.onChange(date)} // Handle date change
                        // Add any other props you need
                      />
                    )}
                  />
                </div>
              </Label>
          
              <Label className="w-1/2">
                <span>Gender</span>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="mt-1"
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      {mockGenders.map((gender) => (
                        <option key={gender.id} value={gender.id}>
                          {gender.name}
                        </option>
                      ))}
                    </Select>
                  )}
                />
              </Label>
            </div>        

            {/* Hàng 6*/}
            <div className="flex w-full mb-4">
              <Label className="w-1/2 mr-4">
                <span>Citizen Identification Card</span>
                <Controller
                  name="identificationCard"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="XX-XXX-XXX" />
                  )}
                />
              </Label>
          
              <Label className="w-1/2">
                <span>Bank</span>
                <Controller
                  name="bank"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="ABC" />
                  )}
                />
              </Label>
            </div>

            {/* Hàng 7*/}
            <div className="flex w-full">
              <Label className="w-full">    {/* full box */}
                <span>Address</span>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} className="mt-1" placeholder="e.g: 123 Street, City ..." />
                  )}
                />
              </Label>
            </div>
                  
          </div>
      
          <div className="flex w-full items-end justify-end">
            <div className="px-1 my-1">
              <Button type="button" onClick={() => reset()}>
                <span className="ml-2/2">Reset</span>
              </Button>
            </div>

            <div className="px-1 my-1">
              <Button type="submit">
                <span className="ml-2/2">Update</span>
              </Button>
            </div>
          </div>
    </form>
    </div>     
  </div>

  )
}

export default Profile
