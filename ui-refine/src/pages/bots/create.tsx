import React, { useState } from "react";
import { useForm, useNavigation } from "@pankod/refine-core";

export const BotCreate: React.FC = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        sourceCode: "",
        avatar: "",
        
     
    });
    const { formLoading, onFinish, redirect } = useForm({
        redirect: false,
    });

    const { goBack } = useNavigation();

    const handleSubmit = async (redirectTo: "list" ) => {
        const response = await onFinish(formValues);

        setFormValues({
            name: "",
            sourceCode: "",
            avatar: "",
          
        });

        redirect(redirectTo, response?.data?.id);
    };

    return (
        <div>
            <button className="back" onClick={() => goBack()}>
                Go Back
            </button>
            <form className="form-wrapper">
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        required
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                name: e.target.value,
                            })
                        }
                        value={formValues.name}
                    />
                </div>
                <div className="form-group">
                    <label>Avatar: </label>
                  <input
                        required
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                avatar: e.target.value,
                            })
                        }
                        value={formValues.avatar}
                    />
                </div>

                <div className="form-group">
                    <label>Source Code: </label>

                    <textarea
                        required
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                sourceCode: e.target.value,
                            })
                        }
                        rows={10}
                        cols={50}
                        value={formValues.sourceCode}
                    />
                </div>
                <div className="saveActions">
                    <button onClick={() => handleSubmit("list")} type="button">
                        Save
                    </button>
                  
                </div>
                {formLoading && <p>Loading</p>}
            </form>
        </div>
    );
};
