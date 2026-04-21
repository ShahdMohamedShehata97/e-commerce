import React from 'react'
import { ProfileInformation } from './ProfileInformation'
import ChangePasswordForm from './ChangePassword'

export default function page() {
  return (
   <>
    <div>
      <ProfileInformation/>
    </div>

    <div>
      
      <ChangePasswordForm/>
    </div>
   </>
  )
}
