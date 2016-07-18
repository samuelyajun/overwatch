import React from 'react';

const UserListRow = (user) => {
    return (
        <div>
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <SelectInput
                name="role"
                label="Role"
                value={user.role}
                onChange={this.onUpdate}
                options={[
                    {
                        text: 'Engagement Manager',
                        value: 'EM'
                    },
                    {
                        text: "Tech Lead",
                        value: "TL"
                    },
                    {
                        text: "Business Analyst",
                        value: "BA"
                    },
                    {
                        text: "Developer",
                        value: "DEV"
                    }
                ]}
            />
        </div>
    );
}
