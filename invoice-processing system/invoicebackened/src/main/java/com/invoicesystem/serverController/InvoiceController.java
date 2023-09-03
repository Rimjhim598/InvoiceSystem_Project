package com.invoicesystem.serverController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.invoicesystem.serverControllermodel.Invoice;
import com.invoicesystem.serverService.Invoiceservice;
import com.invoicesystem.serverModel.Invoice;

@RestController
@CrossOrigin
public class InvoiceController {
	@Autowired
	private Invoiceservice invoiceservice;
	@PostMapping("/invoice")
	public Invoice addInvoice(@RequestBody Invoice invoice)
	{
			return this.invoiceservice.AddInvoice(invoice);
		
	}
	@GetMapping("/invoice")
	public List<Invoice> getInvoices() {
		return this.invoiceservice.getInvoices();
		
	}
	@DeleteMapping("/invoice/{invoiceId}")
	public Invoice deleteInvoice(@PathVariable String invoiceId)
	{
			return this.invoiceservice.deleteInvoice(Long.parseLong(invoiceId));
		
	}

}
