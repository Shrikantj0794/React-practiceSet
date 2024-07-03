import { Button } from "../shadcn/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/components/ui/dialog"
import TransactionForm from "../shadcn/components/molecules/transactionform";


function Home() {
  return (
    <>
      <h1> Expense Tracker</h1>
      
      <Dialog>
  <DialogTrigger><Button>New Transaction</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Transaction</DialogTitle>
      <DialogDescription>
        Manage your finance, keep updating your transition
      </DialogDescription>
    </DialogHeader>
      <TransactionForm></TransactionForm>
  </DialogContent>
</Dialog>

    </>
  )
}

export default Home
