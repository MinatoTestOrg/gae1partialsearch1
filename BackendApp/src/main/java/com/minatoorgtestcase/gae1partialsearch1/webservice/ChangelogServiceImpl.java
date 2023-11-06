package com.minatoorgtestcase.gae1partialsearch1.webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.util.List;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.service.changelog.IChangelogBL;
import com.eva.jersey.base.webservice.BaseWebService;
import com.eva.base.factory.InstanceFactory;
import com.eva.base.model.Changelog;
import com.minatoorgtestcase.gae1partialsearch1.logic.ChangelogBLImpl;

@Path("changelogs")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ChangelogServiceImpl extends BaseWebService<IChangelogBL, Changelog> implements IChangelogService {
	public ChangelogServiceImpl() {
		super(InstanceFactory.getProxy(new ChangelogBLImpl()));
	}
	
	@POST
	@Path("/datatable/{entityName}/{entityId}/{fieldName}/{fromModifiedDate}")
	public PaginationResponse getChangelog(PaginationRequest request,@PathParam("entityName") String entityName, @PathParam("entityId") String entityId,
			@PathParam("fieldName") String fieldName, @PathParam("fromModifiedDate") Long fromModifiedDate) {
		if ("null".equalsIgnoreCase(fieldName)) fieldName = null;
		PaginationResponse response=new PaginationResponse(request); 
		List<Changelog> changeLogList = logic.getChangeLogsByEntityNameAndEntityId(entityName, entityId, fieldName, fromModifiedDate, request.getPageSize());
		response.setResults(changeLogList);		
		return response;
	}
}
