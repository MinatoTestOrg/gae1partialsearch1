package com.minatoorgtestcase.gae1partialsearch1.webservice;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.base.factory.InstanceFactory;
import com.minatoorgtestcase.gae1partialsearch1.logic.AttachmentBLImpl;
import com.minatoorgtestcase.gae1partialsearch1.base.webservice.AttachmentServiceBaseImpl;

@Path("attachments")
@Produces(MediaType.APPLICATION_JSON)
public class AttachmentServiceImpl extends AttachmentServiceBaseImpl<AttachmentBLImpl> {
	public AttachmentServiceImpl() {
		super(new AttachmentBLImpl());
        InstanceFactory.getProxy(logic);	
    }
}
