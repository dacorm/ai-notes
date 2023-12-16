'use client';
import { FC, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/dialog';
import { PlusIcon } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface CreateNoteDialogProps {}

export const CreateNoteDialog: FC<CreateNoteDialogProps> = () => {
    // TODO: get rid of bl
    const [input, setInput] = useState('');
    const createNotebook = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/createNoteBook', {
                name: input,
            });
            return response.data;
        },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) {
            alert('Please enter name of notebook');
        }
        createNotebook.mutate(undefined, {
            onSuccess: () => {
                console.log('created');
            },
            onError: () => {
                console.log('error');
            },
        });
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
                    <PlusIcon className="w-6 h-6 text-green-600" strokeWidth={3} />
                    <h2 className="font-semibold text-green-600 sm:mt-2">
                        New Note Book
                    </h2>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Notebook</DialogTitle>
                    <DialogDescription>
                        You can create a new note by clicking the button below
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Name..."
                    />
                    <div className="h-4"></div>
                    <div className="flex items-center gap-2">
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-green-600">
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
